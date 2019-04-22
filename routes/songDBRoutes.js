var express = require('express');
var url= require('url');
var bodyParser = require('body-parser').json();
var router = express.Router();
var dbCalls = require('../models/songDBModel');


router.get('/tab/:songName/:artist/:album/:songKey', function (req, res, next) {
    dbCalls.getTabs(req.params, function (err, result) {
        console.log(result);
        if(err)
            res.json(err);
        else if(result.length == 0)
        {
            err = "Song does not exist";
            if(err) {
                res.status(400);
                res.json(err);
            }
        }

        else
            res.json(result[0]);
    });
});
router.get('/chords/:songName/:artist/:album/:songKey', function (req, res, next) {
    dbCalls.getChords(req.params, function (err, result) {
        console.log("len: " +result.length);
        if(result.length == 0)
            err = "Song does not exist";
        if(err) {
            res.status(400);
            res.json(err);
        }
        else
        {
            res.json(result[0]);
        }

    });
});

router.get('/songs/:term', function (req, res, next) {
    console.log(req.params);
    dbCalls.getBasicSongInfo(req.params, function (err, result) {
        console.log("RESULTS: "+result);
        if(err)
            res.json(err);
        else if(result.length == 0)
        {
            err = "Song does not exist";
            if(err) {
                res.status(400);
                res.json(err);
            }
        }

        else
            res.json(result);
    });
});

router.post('/save', function(req, res)
{
    //console.log(req.body);
    dbCalls.saveNewSong(req.body, function (err, result) {
        console.log("results: " + result);
        if(err)
            res.json(err);
        else
            res.json(req.body);
    });
});

router.get('/getAll', function(req,res){
    dbCalls.selectAll(function (err, result) {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
});

router.post('/delete', function(req,res){
    dbCalls.deleteSong(req.body, function (err, result) {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
});
module.exports=router;
var express = require('express');
var url= require('url');
var bodyParser = require('body-parser').json();
var router = express.Router();
var dbCalls = require('../models/songDBModel');


router.get('/tab/:songName/:artist/:album/:songKey', function (req, res, next) {
    console.log(req.params.songName);
    dbCalls.getTabs(req.params, function (err, result) {
        console.log(result);
        if(result.length == 0)
            err = "Song does not exist";
        if(err) {
            res.status(400);
            res.json(err);
        }
        else
            res.json(result);
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
            res.json(result);
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
module.exports=router;
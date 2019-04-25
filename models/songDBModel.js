var db = require('../db');

var chordsList = ['A','B','C','D','E','F','G'];
function transposingChords(input_chords,prime_key, target_key)
{
    var tmpChords = input_chords.split("\n");
    console.log("tmpChords: "+ tmpChords);
    var isChords = false;
    var chords = [];
    for(var i = 0; i < tmpChords[0].length; i++)
    {
        if (tmpChords[0][i] != " ")
        {
            chordsList.forEach(function(d){
                if (tmpChords[0][i] == d)
                    isChords = true;
            });

        }
    }
    var start = 1;
    if(isChords)
        start = 0;
        for (var i = start; i <tmpChords.length; i+=2)
        {
            var word = "";
            for(var j = 0; j < tmpChords[i].length; j+=1)
            {

                if (tmpChords[i][j] != " ") {
                    word += tmpChords[i][j];
                    if ((j == tmpChords[i].length - 1) || (tmpChords[i][j + 1] == " ")) {
                        chords.push(word);
                        word = "";
                    }

                }
            }

            console.log(("chords recorded: "+ chords));
        }


    var input_arr = chords;
    var pre_key = 0;
    var tar_key = 0;
    if (prime_key == 'C'){
        pre_key = 1;}
    else if(prime_key == 'Db'){
        pre_key = 2;}
    else if(prime_key == 'C#'){
        pre_key = 2;}
    else if(prime_key == 'D'){
        pre_key = 3;}
    else if(prime_key == 'Eb'){
        pre_key = 4;}
    else if(prime_key == 'D#'){
        pre_key = 4;}
    else if(prime_key == 'E'){
        pre_key = 5;}
    else if(prime_key == 'F'){
        pre_key = 6;}
    else if(prime_key == 'F#'){
        pre_key = 7;}
    else if(prime_key == 'Gb'){
        pre_key = 7;}
    else if(prime_key == 'G'){
        pre_key = 8;}
    else if(prime_key == 'Ab'){
        pre_key = 9;}
    else if(prime_key == 'G#'){
        pre_key = 9;}
    else if(prime_key == 'A'){
        pre_key = 10;}
    else if(prime_key == 'Bb'){
        pre_key = 11;}
    else if(prime_key == 'A#'){
        pre_key = 11;}
    else if(prime_key == 'B'){
        pre_key = 12;}
    else {console.log("please input a valid key.\n");
    }

    if (target_key == 'C'){
        tar_key = 1;}
    else if(target_key == 'Db'){
        tar_key = 2;}
    else if(target_key == 'C#'){
        tar_key = 2;}
    else if(target_key == 'D'){
        tar_key = 3;}
    else if(target_key == 'Eb'){
        tar_key = 4;}
    else if(target_key == 'D#'){
        tar_key = 4;}
    else if(target_key == 'E'){
        tar_key = 5;}
    else if(target_key == 'F'){
        tar_key = 6;}
    else if(target_key == 'F#'){
        tar_key = 7;}
    else if(target_key == 'Gb'){
        tar_key = 7;}
    else if(target_key == 'G'){
        tar_key = 8;}
    else if(target_key == 'Ab'){
        tar_key = 9;}
    else if(target_key == 'G#'){
        tar_key = 9;}
    else if(target_key == 'A'){
        tar_key = 10;}
    else if(target_key == 'Bb'){
        tar_key = 11;}
    else if(target_key == 'A#'){
        tar_key = 11;}
    else if(target_key == 'B'){
        tar_key = 12;}
    else {console.log("please input a valid key.\n");
    }

    var key_distance = tar_key - pre_key;
    var new_key_distance = 0;
    if (Math.abs(key_distance) > 6){
        if(key_distance>0){
            new_key_distance = key_distance-12;
        }
        else if(key_distance <0){
            new_key_distance = key_distance -(-12);
        }
        else{
            console.log("Same key values.");
        }
    }
    else{
        if(key_distance>0){
            new_key_distance = key_distance-12;
        }
        else if(key_distance <0){
            new_key_distance = key_distance -(-12);
        }
        else{
            console.log("Same key values.");
        }
    }


    for (i=0;i<input_arr.length;i++){
        if (input_arr[i] == 'C'){
            input_arr[i] = 1;}
        else if(input_arr[i] == 'Cm'){
            input_arr[i] = 0.5;}
        else if(input_arr[i] == 'Db'){
            input_arr[i] = 2;}
        else if(input_arr[i] == 'Dbm'){
            input_arr[i] = 1.5;}
        else if(input_arr[i] == 'C#'){
            input_arr[i] = 2;}
        else if(input_arr[i] == 'C#m'){
            input_arr[i] = 1.5;}
        else if(input_arr[i] == 'D'){
            input_arr[i] = 3;}
        else if(input_arr[i] == 'Dm'){
            input_arr[i] = 2.5;}
        else if(input_arr[i] == 'Eb'){
            input_arr[i] = 4;}
        else if(input_arr[i] == 'Ebm'){
            input_arr[i] = 3.5;}
        else if(input_arr[i] == 'D#'){
            input_arr[i] = 4;}
        else if(input_arr[i] == 'D#m'){
            input_arr[i] = 3.5;}
        else if(input_arr[i] == 'E'){
            input_arr[i] = 5;}
        else if(input_arr[i] == 'Em'){
            input_arr[i] = 4.5;}
        else if(input_arr[i] == 'F'){
            input_arr[i] = 6;}
        else if(input_arr[i] == 'Fm'){
            input_arr[i] = 5.5;}
        else if(input_arr[i] == 'F#'){
            input_arr[i] = 7;}
        else if(input_arr[i] == 'F#m'){
            input_arr[i] = 6.5;}
        else if(input_arr[i] == 'Gb'){
            input_arr[i] = 7;}
        else if(input_arr[i] == 'Gbm'){
            input_arr[i] = 6.5;}
        else if(input_arr[i] == 'G'){
            input_arr[i] = 8;}
        else if(input_arr[i] == 'Gm'){
            input_arr[i] = 7.5;}
        else if(input_arr[i] == 'Ab'){
            input_arr[i] = 9;}
        else if(input_arr[i] == 'Abm'){
            input_arr[i] = 8.5;}
        else if(input_arr[i] == 'G#'){
            input_arr[i] = 9;}
        else if(input_arr[i] == 'G#m'){
            input_arr[i] = 8.5;}
        else if(input_arr[i] == 'A'){
            input_arr[i] = 10;}
        else if(input_arr[i] == 'Am'){
            input_arr[i] = 9.5;}
        else if(input_arr[i] == 'Bb'){
            input_arr[i] = 11;}
        else if(input_arr[i] == 'Bbm'){
            input_arr[i] = 10.5;}
        else if(input_arr[i] == 'A#'){
            input_arr[i] = 11;}
        else if(input_arr[i] == 'A#m'){
            input_arr[i] = 10.5;}
        else if(input_arr[i] == 'B'){
            input_arr[i] = 12;}
        else if(input_arr[i] == 'Bm'){
            input_arr[i] = 11.5;}
    }

    for (i=0;i<input_arr.length;i++){
        if(input_arr[i]-(-new_key_distance)<=0 || input_arr[i]-(-new_key_distance) >12){
            input_arr[i] = input_arr[i] -(-key_distance);
        }
        else{
            input_arr[i] = input_arr[i] -(-new_key_distance);
        }
    }


    for (i=0;i<input_arr.length;i++){
        if (input_arr[i] == 1){
            input_arr[i] = 'C';}
        else if(input_arr[i] == 0.5){
            input_arr[i] = 'Cm';}
        else if(input_arr[i] == 2){
            input_arr[i] = 'Db';}
        else if(input_arr[i] == 1.5){
            input_arr[i] = 'Dbm';}
        else if(input_arr[i] == 2){
            input_arr[i] = 'C#';}
        else if(input_arr[i] == 1.5){
            input_arr[i] = 'C#m';}
        else if(input_arr[i] == 3){
            input_arr[i] = 'D';}
        else if(input_arr[i] == 2.5){
            input_arr[i] = 'Dm';}
        else if(input_arr[i] == 4){
            input_arr[i] = 'Eb';}
        else if(input_arr[i] == 3.5){
            input_arr[i] = 'Ebm';}
        else if(input_arr[i] == 4){
            input_arr[i] = 'D#';}
        else if(input_arr[i] == 3.5){
            input_arr[i] = 'D#m';}
        else if(input_arr[i] == 5){
            input_arr[i] = 'E';}
        else if(input_arr[i] == 4.5){
            input_arr[i] = 'Em';}
        else if(input_arr[i] == 6){
            input_arr[i] = 'F';}
        else if(input_arr[i] == 5.5){
            input_arr[i] = 'Fm';}
        else if(input_arr[i] == 7){
            input_arr[i] = 'F#';}
        else if(input_arr[i] == 6.5){
            input_arr[i] = 'F#m';}
        else if(input_arr[i] == 7){
            input_arr[i] = 'Gb';}
        else if(input_arr[i] == 6.5){
            input_arr[i] = 'Gbm';}
        else if(input_arr[i] == 8){
            input_arr[i] = 'G';}
        else if(input_arr[i] == 7.5){
            input_arr[i] = 'Gm';}
        else if(input_arr[i] == 9){
            input_arr[i] = 'Ab';}
        else if(input_arr[i] == 8.5){
            input_arr[i] = 'Abm';}
        else if(input_arr[i] == 9){
            input_arr[i] = 'G#';}
        else if(input_arr[i] == 8.5){
            input_arr[i] = 'G#m';}
        else if(input_arr[i] == 10){
            input_arr[i] = 'A';}
        else if(input_arr[i] == 9.5){
            input_arr[i] = 'Am';}
        else if(input_arr[i] == 11){
            input_arr[i] = 'Bb';}
        else if(input_arr[i] == 10.5){
            input_arr[i] = 'Bbm';}
        else if(input_arr[i] == 11){
            input_arr[i] = 'A#';}
        else if(input_arr[i] == 10.5){
            input_arr[i] = 'A#m';}
        else if(input_arr[i] == 12){
            input_arr[i] = 'B';}
        else if(input_arr[i] == 11.5){
            input_arr[i] = 'Bm';}
    }


    console.log(input_arr)
    var arrIndex = 0;
    var finalChords = "";
    wordIndex = 0;
    var moreChords = "";
    for (var i = start; i <tmpChords.length; i+=2)
    {
        var wordIndex = 0;
        for(var j = 0; j < tmpChords[i].length; j+=1)
        {
            console.log("word Index and j " + j);
            if (tmpChords[i][j] != " ") {
                if (wordIndex == 0)
                    wordIndex = j;
                if ((j == tmpChords[i].length - 1) || (tmpChords[i][j + 1] == " ")) {
                            moreChords += input_arr[arrIndex];
                            arrIndex += 1;
                            wordIndex = 0;

                }

            }
            else{moreChords += " "}
        }

        finalChords += moreChords  +"<br>" +tmpChords[i+1]+"<br>";
        moreChords = "";
    }
    console.log("final: "  + finalChords);
    return finalChords;


}






function transposeTab(songInfo) {
    var input_str = songInfo.Tab;
    var chords = songInfo.chords;
    var prime_key = songInfo.default_key;
    var pre_key = 0;
    var tar_key = 0;
    var target_key_arr = [ 'A','B','C','D','E','F','G','Ab','Bb','Db','Eb','Gb','C#','D#','F#','A#','G#'];
    //["A", songInfo.Tab, songInfo.chords],
    var transposed_tabs_arr = [];

    target_key_arr.forEach(function(target_key){
        var tab_arr = [];
        if (prime_key == 'C') {
            pre_key = 1;
        } else if (prime_key == 'Db') {
            pre_key = 2;
        } else if (prime_key == 'C#') {
            pre_key = 2;
        } else if (prime_key == 'D') {
            pre_key = 3;
        } else if (prime_key == 'Eb') {
            pre_key = 4;
        } else if (prime_key == 'D#') {
            pre_key = 4;
        } else if (prime_key == 'E') {
            pre_key = 5;
        } else if (prime_key == 'F') {
            pre_key = 6;
        } else if (prime_key == 'F#') {
            pre_key = 7;
        } else if (prime_key == 'Gb') {
            pre_key = 7;
        } else if (prime_key == 'G') {
            pre_key = 8;
        } else if (prime_key == 'Ab') {
            pre_key = 9;
        } else if (prime_key == 'G#') {
            pre_key = 9;
        } else if (prime_key == 'A') {
            pre_key = 10;
        } else if (prime_key == 'Bb') {
            pre_key = 11;
        } else if (prime_key == 'A#') {
            pre_key = 11;
        } else if (prime_key == 'B') {
            pre_key = 12;
        } else {
            console.log("please input a valid key.\n");
        }

        if (target_key == 'C') {
            tar_key = 1;
        } else if (target_key == 'Db') {
            tar_key = 2;
        } else if (target_key == 'C#') {
            tar_key = 2;
        } else if (target_key == 'D') {
            tar_key = 3;
        } else if (target_key == 'Eb') {
            tar_key = 4;
        } else if (target_key == 'D#') {
            tar_key = 4;
        } else if (target_key == 'E') {
            tar_key = 5;
        } else if (target_key == 'F') {
            tar_key = 6;
        } else if (target_key == 'F#') {
            tar_key = 7;
        } else if (target_key == 'Gb') {
            tar_key = 7;
        } else if (target_key == 'G') {
            tar_key = 8;
        } else if (target_key == 'Ab') {
            tar_key = 9;
        } else if (target_key == 'G#') {
            tar_key = 9;
        } else if (target_key == 'A') {
            tar_key = 10;
        } else if (target_key == 'Bb') {
            tar_key = 11;
        } else if (target_key == 'A#') {
            tar_key = 11;
        } else if (target_key == 'B') {
            tar_key = 12;
        } else {
            console.log("please input a valid key.\n");
        }

        var key_distance = tar_key - pre_key;


        console.log("key distance is " + key_distance);

        var mystr = input_str;
        //console.log("Mystr: "+mystr);
        var myarr = mystr.split("");
        for (i = 0; i < myarr.length; i++) {
            if (myarr[i] in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
                if (myarr[i + 1] in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
                    if (key_distance > -10 && key_distance < 10) {
                        if ((myarr[i + 1] - -key_distance) >= 10) {
                            myarr[i] += 1;
                            myarr[i + 1] = (myarr[i + 1] - -key_distance) % 10;
                            i += 1;
                        } else if ((myarr[i + 1] - -key_distance) < 10 && (myarr[i + 1] - -key_distance) >= 0) {
                            console.log(myarr[i + 1]);
                            myarr[i + 1] = myarr[i + 1] - (-key_distance);
                            i += 1;
                        } else if ((myarr[i + 1] - -key_distance) < 0) {
                            myarr[i] = myarr[i] - 1;
                            if (myarr[i] == 0) {
                                myarr[i] = '-';
                            }
                            myarr[i + 1] = myarr[i + 1] - (-10) - (-key_distance);
                            i += 1;
                        } else {
                            console.log("this wont show");
                        }
                    } else if (key_distance == 10) {
                        myarr[i] += 1;
                        i += 1;
                    } else if (key_distance == 11) {
                        myarr[i] += 1;
                        myarr[i] += 1;
                        i += 1;
                    } else if (key_distance == -10) {
                        myarr[i] = myarr[i] - 1;
                        if (myarr[i] == 0) {
                            myarr[i] = '-';
                        }
                        i += 1;
                    } else if (key_distance == -11) {
                        if (myarr[i] = 20) {
                            myarr[i] = '-';
                            myarr[i + 1] = 9;
                        }
                        myarr[i] = myarr[i] - 1;
                        if (myarr[i] == 0) {
                            myarr[i] = '-';
                        }
                        myarr[i + 1] = myarr[i + 1] - 1;
                        i += 1;
                    } else {
                        console.log("this wont show");
                    }
                } else {
                    myarr[i] = myarr[i] - -key_distance;
                }
            }
        }


        Array.prototype.in_array = function (e) {
            var r = new RegExp(',' + e + ',');
            return (r.test(',' + this.join(this.S) + ','));
        };
        var strings = ['A', 'E', 'B', 'D', 'G'];
        for (i = 0; i < myarr.length; i++) {
            if(myarr[i] != '(' && myarr[i] != ')') {
                if (['A', 'E', 'B', 'D', 'G'].in_array(myarr[i])) {
                    if (myarr[i + 1] == "|") {
                        myarr[i] = "<br>" + myarr[i];
                    }

                }
            }


            }

        var transposed_tabs = myarr.join("");
        tab_arr.push(target_key);
        tab_arr.push(transposed_tabs);
        tab_arr.push(transposingChords(JSON.stringify(chords),target_key,prime_key));
       // console.log(transposed_tabs);
        transposed_tabs_arr.push(tab_arr);
    });


    return transposed_tabs_arr;
}


var dbCalls =
    {
        saveNewSong: function(newSongInfo, callback){
            console.log(newSongInfo);
            if(newSongInfo !={}) {
                console.log("\nin save New Song \n");
                console.log(newSongInfo);
                var sql_insert_song = "INSERT INTO SongsTable(id, song_name, album, artist, default_key) " +
                    "VALUES (NULL, ?, ?, ?, ?);";

                var sql_get_id = "SELECT LAST_INSERT_ID();";

                var sql_insert_tabs = "INSERT INTO TabsTable (id, song_key, Tab) " +
                    "VALUES (?, ?, ?);";

                var sql_insert_chords = "INSERT INTO ChordsTable (id, song_key, chords) " +
                    "VALUES (?, ?, ?);";
                var sql_get_song_info = "SELECT * FROM SongsTable" +
                    " WHERE artist = ? AND album = ? AND song_name = ?";
                var dummy_sql = "SELECT * FROM SongsTable";

                var results;
                db.query(sql_insert_song, [newSongInfo.songName, newSongInfo.album, newSongInfo.artist, newSongInfo.default_key],
                    function (err, results) {
                        if (err) throw err;
                        //console.log(results);

                        db.query(sql_get_id, function (err, rows) {
                            var id;
                            for (var i = 0; i < rows.length; i++) {
                                var row = rows[i];
                                id = row["LAST_INSERT_ID()"];
                            }
                            console.log("\n ID: " + id);
                            var songKeys = transposeTab(newSongInfo);

                            songKeys.forEach(function (song) {

                                db.query(sql_insert_tabs, [id, song[0], song[1]], function (err, results) {
                                    if (err) throw err;

                                });
                                results = db.query(sql_insert_chords, [id, song[0], song[2]], function (err, results) {
                                    if (err) throw err;
                                    return;
                                });

                            });
                            console.log("out of foreach");
                            //db.query(dummy_sql, callback);
                            db.query(sql_get_song_info, [newSongInfo.artist, newSongInfo.album, newSongInfo.songName], callback);
                        });
                        console.log("out of next");
                        return;
                    });
            }},

        getTabs: function(songInfo, callback)
        {
            console.log(songInfo);
            var sql_get_tab = "SELECT id, song_key, Tab FROM SongsTable"+
                " INNER JOIN TabsTable USING (id)"+
                " WHERE artist = ? AND album = ? AND song_name = ? AND song_key = ?";
            db.query(sql_get_tab, [songInfo.artist, songInfo.album, songInfo.songName, songInfo.songKey], callback);
        },
        getChords: function(songInfo, callback)
        {
            var sql_get_chords = "SELECT id, song_key, chords FROM SongsTable"+
                " INNER JOIN ChordsTable USING (id)"+
                " WHERE artist = ? AND album = ? AND song_name = ? AND song_key = ?";
            db.query(sql_get_chords, [songInfo.artist, songInfo.album, songInfo.songName, songInfo.songKey], callback);
        },
        getBasicSongInfo: function(search, callback)
        {
            var sql_search = "SELECT * FROM SongsTable "+
                "WHERE song_name = ? OR album = ? OR artist = ?";

            db.query(sql_search, [search.term, search.term, search.term],callback);
        },
        selectAll: function(callback)
        {
            var sql_get_all = "SELECT * FROM SongsTable;"
            db.query(sql_get_all, callback);
        },
        deleteSong: function(songInfo, callback)
        {
            var sql_get_id = "SELECT id FROM SongsTable "+
                " WHERE artist = ? AND album = ? AND song_name = ?";
            var sql_del_song = "DELETE FROM SongsTable"+
                " WHERE id = ?";

            var sql_del_tab = "DELETE From TabsTable WHERE id = ?";
            var sql_del_chord = "DELETE FROM ChordsTable WHERE id = ?";
            db.query(sql_get_id, [songInfo.artist, songInfo.album, songInfo.songName], function(err, rows)
            {
                if (err) throw err;
                //console.log(results);{
                var id;
                var row = rows[0];
                console.log(row)
                id = row["id"];

                    console.log("\n ID: " + id);
                db.query(sql_del_tab, [id], function(){
                db.query(sql_del_chord, [id], function(){
                db.query(sql_del_song, [id], callback);
                });
            }
                );

            });
        }
        };

module.exports=dbCalls;


var db = require('../db');



function transposeTab(songInfo) {
    var input_str = songInfo.Tab;
    var chords = songInfo.chords;
    var prime_key = songInfo.default_key;
    var pre_key = 0;
    var tar_key = 0;
    var target_key_arr = [ "A","B","C","D","E","F","G","Ab","Bb","Db","Eb","Gb"];
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
    console.log("Myster: "+mystr);
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
                        print(myarr[i + 1]);
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
                        print("this wont show");
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

    for (i = 0; i < myarr.length; i++) {
        if (myarr[i] == "|") {
            if (['A', 'E', 'B', 'D', 'G'].in_array(myarr[i + 1])) {
                myarr[i + 1] = "<br>" + myarr[i + 1];
            }
        }
    }
    var transposed_tabs = myarr.join("");
    tab_arr.push(target_key);
    tab_arr.push(transposed_tabs);
    tab_arr.push(chords);
    console.log(transposed_tabs);
    transposed_tabs_arr.push(tab_arr);
});
    return transposed_tabs_arr;
}


var dbCalls =
    {
        saveNewSong: function(newSongInfo, callback){
            console.log("\nin save New Song \n");
           // console.log(newSongInfo);
        var sql_insert_song = "INSERT INTO SongsTable(id, song_name, album, artist, default_key) " +
            "VALUES (NULL, ?, ?, ?, ?);";

        var sql_get_id = "SELECT LAST_INSERT_ID();";

        var sql_insert_tabs = "INSERT INTO TabsTable (id, song_key, Tab) "+
            "VALUES (?, ?, ?);";

        var sql_insert_chords = "INSERT INTO ChordsTable (id, song_key, chords) "+
            "VALUES (?, ?, ?);";
         var   sql_get_song_info = "SELECT * FROM SongsTable"+
                " WHERE artist = ? AND album = ? AND song_name = ?";
         var dummy_sql = "SELECT * FROM SongsTable";

        var results;
        db.query(sql_insert_song, [newSongInfo.songName, newSongInfo.album, newSongInfo.artist, newSongInfo.default_key],
            function(err, results) {
                if(err) throw err;
                //console.log(results);

                db.query(sql_get_id, function(err, rows)
                {
                    var id;
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        id = row["LAST_INSERT_ID()"];
                    }
                console.log("\n ID: " + id);
                var songKeys = transposeTab(newSongInfo);

                songKeys.forEach(function (song) {
                    console.log(song + "\n\n\n");
                    db.query(sql_insert_tabs, [id, song[0], song[1]], function(err,results)
                    {
                        if(err) throw err;

                    });
                    results = db.query(sql_insert_chords, [id, song[0], song[2]], function(err,results)
                    {
                        if(err) throw err;
                        return;
                    });

                });
                console.log("out of foreach");
                db.query(sql_get_song_info, [newSongInfo.artist, newSongInfo.album, newSongInfo.songName], callback);
            });
                console.log("out of next");
                return;
            } );
        },

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
        }
    };

module.exports=dbCalls;

// queryDB = function(sql_cmd)
// {
//     connection.connect(function(err) {
//         if (err) {
//             console.error('Database connection '+ process.env.CapstoneAwsSqlAddress +' failed: ' + err.stack);
//             return;
//         }
//
//         console.log('Connected to database address: ' + process.env.CapstoneAwsSqlAddress);
//         connection.query(sql_cmd, function(err, results)
//             {
//                 if (err) throw err;
//                 return results;
//
//             }
//         );
//     });
// };
// exports.addEntry = function(songName, artist, album, defaultKey, tabsString, Chords)
// {
//
//         var sql_insert_song = "INSERT INTO SongsTable(id, song_name, album, artist, default_key)\n" +
//             "VALUES (NULL, *song_name, *album, *artist, *default_key)".replace("*song_name", songName)
//                 .replace("*album", album).replace("*artist", artist)
//                 .replace("*default_key", defaultKey);
//
//         var sql_get_id = "SELECT LAST_INSERT_ID()";
//
//         var sql_insert_tabs_vars = "INSERT INTO TabsTable (id, song_key, Tab)"+
//             "VALUES (*id, *key, *tab)";
//
//         var sql_insert_chords_vars = "INSERT INTO ChordsTable (id, song_key, chords)"+
//             "VALUES (*id, *key, *chords";
//
// };
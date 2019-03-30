var db = require('../db');

transposeTab = function(songInfo)
{
    var songs = [
      ["A", songInfo.Tab, songInfo.chords],
        ["B", songInfo.Tab, songInfo.chords],
        ["C", songInfo.Tab, songInfo.chords],
        ["D", songInfo.Tab, songInfo.chords],
        ["E", songInfo.Tab, songInfo.chords],
        ["F", songInfo.Tab, songInfo.chords],
        ["G", songInfo.Tab, songInfo.chords],
        ["Ab", songInfo.Tab, songInfo.chords],
        ["Bb", songInfo.Tab, songInfo.chords],
        ["Db", songInfo.Tab, songInfo.chords],
        ["Eb", songInfo.Tab, songInfo.chords],
        ["Gb", songInfo.Tab, songInfo.chords],
    ];
    return songs;
};
var dbCalls =
    {
        saveNewSong: function(newSongInfo, callback){
            console.log("\nin save New Song \n");
           // console.log(newSongInfo);
        var sql_insert_song = "INSERT INTO SongsTable(id, song_name, album, artist, default_key)" +
            "VALUES (NULL, ?, ?, ?, ?);";

        var sql_get_id = "SELECT LAST_INSERT_ID();";

        var sql_insert_tabs = "INSERT INTO TabsTable (id, song_key, Tab)"+
            "VALUES (?, ?, ?);";

        var sql_insert_chords = "INSERT INTO ChordsTable (id, song_key, chords)"+
            "VALUES (?, ?, ?);";
         var   sql_get_song_info = "SELECT * FROM SongsTable"+
                " WHERE artist = ? AND album = ? AND song_name = ?";

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
            var sql_get_tab = "SELECT Tab FROM SongsTable"+
                " INNER JOIN TabsTable USING (id)"+
                " WHERE artist = ? AND album = ? AND song_name = ? AND song_key = ?";
            db.query(sql_get_tab, [songInfo.artist, songInfo.album, songInfo.songName, songInfo.songKey], callback);
        },
        getChords: function(songInfo, callback)
        {
            var sql_get_chords = "SELECT chords FROM SongsTable"+
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
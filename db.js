var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.CapstoneAwsSqlAddress,
    port     : process.env.CapstoneAwsSqlPort,
    user     : process.env.CapstoneAwsSqlUser,
    password : process.env.CapstoneAwsSqlPassword,
    database : "SongsDatabase"
})

connection.connect(function(err) {
    if (err) throw err;
    else
        console.log('Connected');
});

module.exports = connection;

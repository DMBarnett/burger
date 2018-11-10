var express = require(express);
var mysql = require(mysql);

var app = express();

var PORT = process.env.port || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1111",
    database: "burgers_db"
})

console.log("Peach")

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected as id "+connection.threadId);
})

module.exports = connection;
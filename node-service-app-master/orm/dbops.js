var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : process.env.MYSQL_SERVERNAME,
  user     : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASS,
  database : 'wfm'
});

const dbops= {
    
    getPeople: function(callback){
        connection.query("select * from employee",callback)
    }
    
}

module.exports=dbops
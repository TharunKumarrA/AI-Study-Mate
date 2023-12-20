const mysql = require('mysql2');
const fs = require('fs');

const pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'THANUSmysql@2005',
  database:'AISM'
});

pool.getConnection((err,con)=>{
  if(err) console.log(err);
  else{
    console.log('Connected to Database');
    const sqlInit = fs.readFileSync("D:\\Project Works\\AI Study Mate\\backend\\Database\\schema.sql",'utf8');
    const tables = sqlInit.split(';');
    try{
      for (const table of tables){
        if(table.trim() != ''){
            pool.query(table,(error, result)=>{
              if(error) console.log(error);
              else console.log("Created table successfully !");
          });
        }
      }
    }
    catch(err){
      console.log(err);
    }
  }
})

module.exports = pool;
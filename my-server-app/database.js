var sqlite3 = require('sqlite3').verbose()

// open the database
let db = new sqlite3.Database('myCourse.db', (err) => {
    if (err) {
      console.error(err.message);
      throw err
    }
    console.log('Connected to the myCourse database.');
  });


  // create table 'Module'
  const sql='CREATE TABLE Module(id INTEGER PRIMARY KEY, name TEXT)';
  db.run(sql, (err) => {
    if (err) {
        // Table already created
        console.log('Module already created.');
    }else{
      console.log('Module created.');
      
      // First time Module created, insert some rows
      console.log('First time Module created, creating some rows.');
      
      var insert = 'INSERT INTO Module(name) VALUES(?)';
      //db.run(insert, ['Programming']);
      //db.run(insert, ['Artificial Intelligence']);
      //db.run(insert, ['Theory of Computation']);
    }
  });


// export as module, called db
module.exports = db

var mysqli = require('mysql');

// Buat Koneksi database
const conn = mysqli.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbrestapi'
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Database tersambung !');
})

module.exports = conn;

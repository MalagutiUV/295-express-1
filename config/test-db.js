import 'dotenv/config.js';
import mysql from 'mysql2/promise.js';

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB,
      port: 3306,
      ssl: { rejectUnauthorized: true }, // Azure verlangt SSL
    });

    console.log('✅ Verbindung erfolgreich!');

    const [rows] = await connection.query('SELECT NOW() AS now');
    console.log('DB Zeit:', rows[0].now);

    await connection.end();
  } catch (err) {
    console.error('❌ Fehler beim Verbinden:', err.message);
  }
}

testConnection();

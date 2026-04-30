require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// DB connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("DB connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Routes
app.get("/api/messages", (req, res) => {
  db.query("SELECT * FROM messages", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "DB query failed" });
    }
    res.json(results);
  });
});

app.post("/api/messages", (req, res) => {
  db.query("INSERT INTO messages (text) VALUES (?)",["Hello from MySQL..."],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Insert failed" });
      }
      res.json({ message: "Inserted", id: result.insertId });
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
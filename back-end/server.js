const express = require("express");
const mainRouter = require("./routes/main-route");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");
const app = express();

app.use(cors());
app.use(express.json());
app.use(mainRouter);

app.get("/data", (req, res) => {
  db.query("select * from role", (err, rows, fields) => {
    if (!err) {
      console.log(rows);
    } else {
      console.log(err);
    }
  });
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const cors = require("cors");
var mysql = require("mysql");
app.use(cors());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "logowanie",
});
con.connect(function (err) {
  if (err) console.log(err);
  console.log("polaczono");
});
app.get("/checkpassword/:inputl/:inputh", (req, res) => {
  const inputl = req.params.inputl;
  const inputh = req.params.inputh;
  const sql = "SELECT * FROM hasla";
  var passwords;
  con.query(sql, function (err, result, fields) {
    if (err) console.log(err);
    passwords = JSON.parse(JSON.stringify(result));
    check(passwords);
  });
  var zmienna;
  function check(passwords) {
    for (let i = 0; i <= passwords.length - 1; i++) {
      if (inputl == passwords[i].Login && inputh == passwords[i].Password) {
        zmienna = "access";
      }
    }
    if (zmienna == undefined) {
      zmienna = "no access";
    }
    res.send(zmienna);
  }
});

app.listen(3000);

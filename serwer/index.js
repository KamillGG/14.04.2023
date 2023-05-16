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
  const sql = `SELECT * FROM hasla WHERE Login='${inputl}'`;
  var passwords;
  con.query(sql, function (err, result, fields) {
    if (err) console.log(err);
    else {
      passwords = result;
      check(passwords);
    }
  });
  var zmienna;
  function check(passwords) {
    if (passwords.length == 0) {
      zmienna = "no access";
    } else {
      if (
        inputh == passwords[0].Password &&
        passwords[0].uprawnienia == "admin"
      ) {
        zmienna = "admin";
      } else if (
        inputh == passwords[0].Password &&
        passwords[0].uprawnienia == "user"
      ) {
        zmienna = "user";
      }
    }
    res.send(zmienna);
  }
});

app.listen(3000);

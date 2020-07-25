const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello from server!");
});
app.get("/auth/google", (req, res) => {
  res.json({
    nhietdo: [Math.floor(Math.random() * 30)],
    doam: [Math.floor(Math.random() * 30)],
  });
});
app.listen(3001, () => {
  console.log("App listening on port 3001");
});

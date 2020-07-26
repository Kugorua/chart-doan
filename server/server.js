const express = require("express");

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("hello from server!");
});
app.get("/auth/google", (req, res) => {
  res.json({
    nhietdo: [Math.floor(Math.random() * 30.3)],
    doam: [Math.floor(Math.random() * 30.5)],
  });
});
app.post("/auth/create", function (req, res) {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3001, () => {
  console.log("App listening on port 3001");
});

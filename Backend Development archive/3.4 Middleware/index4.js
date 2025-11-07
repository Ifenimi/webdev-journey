import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath( import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const name = req.body.street;
  const email = req.body.pet;
  res.send(`<h2>Your band name is: </h2> <h3>${name}${email}</h3>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

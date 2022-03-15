const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const path = require("path");


const app = express();
require("dotenv").config({ path: "./config.env" });

//app.set
//app.set("view engine", "ejs");

//app.use
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(require("./routes/noteR"));
app.use(require("./routes/itemR"));
app.use(require("./routes/postR"));
app.use(express.static(path.join(__dirname, "client", "public")))
//app.use(express.static(path.join(__dirname, "client", "build")))

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

// get driver connection
const dbo = require("./db/conn");
dbo.connectToServer();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
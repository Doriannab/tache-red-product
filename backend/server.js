const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//connection à la DB

connectDB()
const app = express();
//traitement des données de la request
app.use(express.json());
app.use(express.urlencoded ({ extended: false }))

app.use("/post", require("./routes/post.routes"));

// Pour  le server
app.listen(port, () => console.log("le server a demarré au port " + port));
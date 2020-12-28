const express = require("express");
const app = express();
const path = require("path");
const serveStatic = require("serve-static");
const port = process.env.port || 3000;

app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

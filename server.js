const express = require("express");
const app = express();
const path = require("path");
const serveStatic = require("serve-static");
const port = process.env.PORT || 5000;
app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

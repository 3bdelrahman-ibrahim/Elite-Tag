const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Rewrite rule for /id/* to serve card.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "card.html"));
});

// Handle other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});

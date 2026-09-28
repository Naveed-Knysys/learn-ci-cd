const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

function getMessage() {
  return "Hello from CI/CD - v2";
}

app.get("/", (req, res) => {
  res.send(getMessage());
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = {
  app,
  getMessage
};
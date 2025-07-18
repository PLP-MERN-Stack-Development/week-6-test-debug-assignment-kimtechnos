const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "../logs/server.log");

function log(message) {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFile, entry);
  console.log(entry);
}

module.exports = log;

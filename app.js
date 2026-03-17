require('dotenv').config();

function sum(a, b) {
  return a + b;
}

const appName = process.env.APP_NAME;

console.log("App Name:", appName);

module.exports = { sum };

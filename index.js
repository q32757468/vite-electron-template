const path = require("path");

// let outputFile;
// if (process.env.NODE_ENV === "development") {
//   outputFile = "app.dev.js";
// } else {
//   outputFile = "app.prod.js";
// }

require(path.resolve(__dirname, "dist/main", "app.js"));

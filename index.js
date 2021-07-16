if (process.env.NODE_ENV === "development") {
  require("ts-node").register({
    project: "./tsconfig.electron.json",
  });
  require("./src/main/app.ts");
} else {
  require("./dist/main/app.js");
}

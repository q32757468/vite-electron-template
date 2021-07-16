if (process.env.NODE_ENV === "development") {
  require("ts-node").register({
    compilerOptions: {
      target: "esnext",
      module: "CommonJS",
      moduleResolution: "node",
      strict: true,
      resolveJsonModule: true,
      esModuleInterop: true,
      allowJs: true,
      // "outDir": "dist/main"
    },
    include: ["src/main/**/*"],
    exclude: ["node_modules"],
  });
  require("./src/main/app.ts");
} else {
  require("./dist/main/app.js");
}

require("ts-node").register({
  compilerOptions: {
    target: "esnext",
    module: "CommonJS",
    moduleResolution: "node",
    strict: true,
    resolveJsonModule: true,
    esModuleInterop: true,
    allowJs: true,
  },
  include: ["src/main/**/*"],
  exclude: ["node_modules"],
});

require("./src/main/app.ts");

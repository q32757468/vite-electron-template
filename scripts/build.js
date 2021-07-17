const path = require("path");
const { build } = require("vite");
const electron = require("electron-connect").server.create({});

const root = path.resolve(__dirname, "../");

let entryFileNames, minify, emptyOutDir, mode, watch;
if (process.env.NODE_ENV === "development") {
  mode = "development";
  minify = false;
  entryFileNames = "[name].js";
  emptyOutDir = false;
  watch = true;
} else {
  mode = "production";
  entryFileNames = "[name].js";
  minify = true;
  emptyOutDir = true;
  watch = false;
}

(async () => {
  const watcher = await build({
    root,
    base: "./",
    mode,
    build: {
      emptyOutDir,
      minify,
      watch,
      outDir: path.resolve(root, "dist/main"), // 使用vite的配置而不是使用rollup的配置否则emptyOutDir无效
      rollupOptions: {
        input: path.resolve(root, "src/main/app.ts"),
        output: {
          format: "cjs",
          entryFileNames,
          // dir: path.resolve(root, "dist/main"),
        },
        external: ["electron"],
      },
    },
  });

  // TODO: 当electron关闭时不能自动结束该脚本运行
  if (process.env.NODE_ENV === "development") {
    watcher.on("event", (event) => {
      if (event.code === "END") {
        console.log(electron.electronState);
        electron.electronState === "init"
          ? electron.start()
          : electron.restart();
      }
    });
  }
})();

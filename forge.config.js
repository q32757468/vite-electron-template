const path = require("path");

module.exports = {
  packagerConfig: {
    ignore: (path) => {
      const reserves = ["package.json", "index.js", "dist"];

      const flag = reserves.some((item) => {
        return String(path).startsWith("/" + item);
      });

      // 需要注意的是当路径为空时也需要返回false，否则会直接中断
      if (flag || !path) {
        return false;
      } else {
        return true;
      }
    },
    icon: "resources/icons/icon",
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "nim_chat",
        iconUrl: path.resolve(__dirname, "resources/icons/icon.ico"),
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};

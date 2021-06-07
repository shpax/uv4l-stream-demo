const path = require("path");

module.exports = {
  apps: [
    {
      name: "console-exec-service",
      script: path.resolve(__dirname, "../", "bin/www"),
      restart_delay: 500,
      watch: ["config"],
      watch_options: {
        followSymlinks: false,
      },
      node_args: [],
    },
  ],
};

module.exports = {
  apps: [
    {
      name: "console-exec-service",
      script: `bin/www`,
      restart_delay: 500,
      watch: ["config"],
      watch_options: {
        followSymlinks: false,
      },
      node_args: [],
    },
  ],
};

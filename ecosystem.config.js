module.exports = {
  apps: [{
    script: "server.js",
    watch: ["*"],
    watch_delay: 1000,
    ignore_watch : ["node_modules", "client/img"],
  }]
}
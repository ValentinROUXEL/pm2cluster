module.exports = {
  apps : [{
    script: 'server.js',
  }],
   
  // Deployment Configuration
  deploy : {
    production : {
       "user" : "val",
       "host" : ["192.168.7.14"],
       "ref"  : "origin/main",
       "repo" : "https://github.com/ValentinROUXEL/pm2cluster.git",
       "path" : "/home/test",
       "post-deploy" : "npm install"
    }
  }
};
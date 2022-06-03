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
       "repo" : 'git@github.com:ValentinROUXEL/pm2cluster.git',
       "path" : "/home/test",
       "post-deploy" : "npm install; pm2 start server.js"
    }
  }
};
module.exports = {
  apps : [{
    script: './server',
   }],

  deploy : {
    production : {
      user : 'root',
      host : '127.0.0.1:3232',
      ref  : 'origin/main',
      repo : 'git@github.com:ValentinROUXEL/pm2cluster.git',
      path : '/home/test',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};

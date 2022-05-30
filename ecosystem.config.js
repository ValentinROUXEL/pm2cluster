module.exports = {
  apps : [{
    script: './server',
   }],

  deploy : {
    production : {
      user : 'root',
      host : '192.168.1.18:3232',
      ref  : 'origin/main',
      repo : 'git@github.com:ValentinROUXEL/pm2cluster.git',
      path : '/home/test',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};

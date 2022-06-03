module.exports = {
  apps : [{
    script: './server',
   }],

  deploy : {
    production : {
      key: `D:/Documents/pm2petit/pm2cluster/publickey.pub`,
      user : 'val',
      host : '192.168.7.14',
      ssh_options: "StrictHostKeyChecking=no",
      ref  : 'origin/main',
      repo : 'git@github.com:ValentinROUXEL/pm2cluster.git',
      path : '/home/test',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'apt-get install git ; ls -la',
      'post-setup': "ls -la",
      // pre-deploy action
      'pre-deploy-local': "echo 'This is a local executed command'",
      // post-deploy action
      'post-deploy': "npm install",
    }
  }
};

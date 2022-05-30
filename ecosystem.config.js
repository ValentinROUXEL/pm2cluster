module.exports = {
  apps : [{
    script: './server',
   }],

  deploy : {
    production : {
      key: "/publickey.pub",
      user : 'root',
      host : ['127.0.0.1:3232'],
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

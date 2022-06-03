var exec = require('ssh-exec')
exec('cd /home/test', {
    user: 'val',
    host: '192.168.7.14',
    password: '11Nov2017'
  }).pipe(process.stdout)

  exec('ls -al', {
    user: 'val',
    host: '192.168.7.14',
    password: '11Nov2017'
  }).pipe(process.stdout)

  exec('touch aFile', {
    user: 'val',
    host: '192.168.7.14',
    password: '11Nov2017'
  }).pipe(process.stdout)
const config = require('./configSSH')
const username = config.username
const password = config.password
const ipHost = config.ipHost
const exec = require('ssh-exec')

const runCommand = async(commandType = 'pwd', displayIt = true) => {
        await exec(commandType, {
            user: username,
            host: ipHost,
            password: password
          }).pipe(displayIt ? process.stdout : '')
}

module.exports.runCommand = runCommand
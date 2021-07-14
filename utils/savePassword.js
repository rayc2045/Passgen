const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');
const log = console.log;

function savePassword(password, fileToSave) {
  fs.open(path.join(__dirname, '../', fileToSave), 'a', 666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => log(chalk.green('Password saved to passwords.txt')));
    });
  });
}

module.exports = savePassword;

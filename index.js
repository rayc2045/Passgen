const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

// node index -h
program.version('1.0.0').description('Node.js Password Generator');

program
  .option('-l, --length <numbers>', 'length of password', '8') // default length: 8
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .option('-s, --save', 'save password to password.txt')
  .parse();

const { length, numbers, symbols, save } = program.opts();

const password = createPassword(length, numbers, symbols, save);
console.log(chalk.blue('Password: ') + chalk.bold(password));

clipboardy.writeSync(password);
console.log(chalk.yellow('Password copies to clipboard'));

if (save) savePassword(password);

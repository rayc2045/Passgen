#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');
const log = console.log;
const fileToSave = 'passwords.txt';

// node index -h
program
  .version('1.0.0')
  .description('Node.js Password Generator')
  .option('-l, --length <numbers>', 'length of password', '8') // default length: 8
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .option('-s, --save', `save password to ${fileToSave}`)
  .parse();

const { length, numbers, symbols, save } = program.opts();

const password = createPassword(length, numbers, symbols);
clipboardy.writeSync(password);

log(chalk.blue('Generated Password: ') + chalk.bold(password));
log(chalk.yellow('Password copies to clipboard'));

if (save) savePassword(password, fileToSave);

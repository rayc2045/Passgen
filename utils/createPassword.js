const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

function createPassword(length = 8, hasNumbers = true, hasSymbols = true) {
  let chars = alpha;
  if (hasNumbers) chars += numbers;
  if (hasSymbols) chars += symbols;
  return generatePassword(length, chars);
}

function generatePassword(length, chars) {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

module.exports = createPassword;

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '`-=[]\;\',./';
const optionSymbols = 'å∫ç∂´ƒ©˙ˆ∆˚¬µ˜øπœ®ß†¨√∑≈¥Ω`¡™£¢∞§¶•ªº–≠“‘«…æ≤≥÷';
const shiftSymbols = '~!@#$%^&*()_+{}|:"<>?';

function createPassword(length = 10, hasNumbers = true, hasSymbols = true) {
  let chars = alpha;
  if (hasNumbers) chars += numbers;
  if (hasSymbols) chars = chars + symbols + optionSymbols + shiftSymbols;
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

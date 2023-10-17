export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */

//checks if sequence is ascending or descending
function sequence(password) {
  const sequence = "0123456789876543210";
  const matches = password.match(/(\d){4}/g);
  return matches?.some((match) => sequence.includes(match));
}
//DONT FORGET THIS!!!! export default
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  //Not contain any forbidden passwords
  if (forbiddenPasswords.includes(password)) return false;
  //Be between 8 and 15 characters long
  if (password.length !== 10) return false;
  //Not contain any special characters
  const alphaNumerics = /^[a-zA-Z0-9]+$/;
  if (!alphaNumerics.test(password)) return false;
  //Contain at least one number
  const checkingForDigit = /[0-9]/;
  if (!checkingForDigit.test(password)) return false;
  //Contain at least one uppercase letter
  const checkingLowercase = /[a-z]/;
  if (!checkingLowercase.test(password)) return false;

  //Contain at least one lowercase letter
  const checkingUppercase = /[A-Z]/;
  if (!checkingUppercase.test(password)) return false;
  //Have at least 4 different digits/characters
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  //Not contain a directly ascending/descending sequence of numbers

  if (sequence(password)) return false;

  // No ascending/descending sequence found
  return true;
}

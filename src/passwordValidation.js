export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * YOUR CODE GOES IN HERE ... * * *
  /*
   * if (password is not exactly 10 digits or characters...) {
   *   return ...;
   * }
   *
   * if (is not composed by digits and numbers) {
   *   return ...;
   * }
   */
  // Check if the password is at least 10 characters long and at most 20 characters long.
  if (password.length < 10 || password.length > 20) return false;

  // Check if the password is composed of at least 4 different characters.
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  // Check if the password contains at least one lowercase letter, one uppercase letter, and one number.
  const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*/;
  if (!regex.test(password)) return false;

  // Check if the password does not contain any special characters.
  const specialCharactersRegex = /[\W]/;
  if (specialCharactersRegex.test(password)) return false;

  // Check if the password is not in the list of forbidden passwords.
  if (forbiddenPasswords.includes(password)) return false;

  // The password is valid.
  return true;
}

/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */

export default function penaltyPoints(password = "") {
  //check if password is not empty
  if (!password) return 0;
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  //matching all sequences of two or more identical characters in the password string.
  const matches = password.match(/(.)\1+/g);
  if (!matches) return 0;
  // If there are no matches, return 0.
  if (matches.length === 0) return 0;
  // Calculate the penalty points for each match.
  const penaltyPoints = matches
    .map((e) => e.length)
    .map((e) => {
      let count = 0;
      if (e === 2) {
        // For a sequence of two identical characters, add 1 penalty point.
        count = count + 1;
      } else if (e > 2) {
        // For a sequence of three or more identical characters, add 2 penalty points.
        count = count + 2;
      }
      return count;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // Return the sum of penalty points.
  return penaltyPoints;
}

/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */

export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (!password) return 0;
  if (typeof password !== "string") password = String(password);

  const matches = password.match(/(.)\1+/g);
  if (!matches) return 0;

  if (matches.length === 0) return 0;
  const duplicates = matches.map((e) => e.length);
  const penaltyPoints = duplicates
    .map((e) => {
      let count = 0;
      if (e === 2) {
        count = count + 1;
      } else if (e > 2) {
        count = count + 2;
      }
      return count;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // Return the sum of penalty points.
  return penaltyPoints;

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // * * * INSERT YOUR CODE HERE * * * * * * * * * * * * * *
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  //
}
// export default penaltyPoints;

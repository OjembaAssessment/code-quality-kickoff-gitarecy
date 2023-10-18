/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */

export default function penaltyPoints(password = "") {
  if (!password) return 0;

  // Ensure that password is always a string.
  if (typeof password !== "string") password = String(password);

  // Match all sequences of two or more identical characters in the password string.
  const matches = password.match(/(.)\1+/g);
  if (!matches) return 0;

  if (matches.length === 0) return 0;

  // Calculate the penalty points for each match using the reduce() method.
  const penaltyPoints = matches.reduce((sum, currentValue) => {
    const length = currentValue.length;
    // Calculate the penalty points for the match.
    let count = 0;
    if (length === 2) {
      count += 1;
    } else if (length > 2) {
      count += 2;
    }
    return (sum += count);
  }, 0);

  // Return the sum of penalty points.
  return penaltyPoints;
}

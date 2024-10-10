//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (input) => {
  // input = input.toUpperCase()
  // const splitedInput = input.split('')
  // const alphabetOneScore = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
  // const alphabetTwoScore = ['D', 'G']
  // const alphabetThreeScore = ['B', 'C', 'M', 'P']
  // const alphabetFourScore = ['F', 'H', 'V', 'W', 'Y']
  // const alphabetFiveScore = ['K']
  // const alphabetEightScore = ['J', 'X']
  // const alphabetTenScore = ['Q', 'Z']
  // let sum = 0
  // for (let letter of splitedInput) {
  //   if (alphabetOneScore.includes(letter)) {
  //     sum = sum + 1
  //   } else if (alphabetTwoScore.includes(letter)) {
  //     sum = sum + 2
  //   } else if (alphabetThreeScore.includes(letter)) {
  //     sum = sum + 3
  //   } else if (alphabetFourScore.includes(letter)) {
  //     sum = sum + 4
  //   } else if (alphabetFiveScore.includes(letter)) {
  //     sum = sum + 5
  //   } else if (alphabetEightScore.includes(letter)) {
  //     sum = sum + 8
  //   } else if (alphabetTenScore.includes(letter)) {
  //     sum = sum + 10
  //   } else {
  //     sum = sum + 0
  //   }
  // }
  // return sum

  input = input.toUpperCase()
  const arrayLetter = input.split('')
  const alphabet = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  }
  const result = arrayLetter.map(letter => alphabet[letter] || 0).reduce((accum, current) => accum + current, 0)
  return result
};
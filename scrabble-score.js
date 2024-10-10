//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (input) => {
  input = input.toUpperCase()
  const splitedInput = input.split('')
  const alphabetOneScore = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
  const alphabetTwoScore = ['D', 'G']
  const alphabetThreeScore = ['B', 'C', 'M', 'P']
  const alphabetFourScore = ['F', 'H', 'V', 'W', 'Y']
  const alphabetFiveScore = ['K']
  const alphabetEightScore = ['J', 'X']
  const alphabetTenScore = ['Q', 'Z']
  let sum = 0
  for (let letter of splitedInput) {
    if (alphabetOneScore.includes(letter)) {
      sum = sum + 1
    } else if (alphabetTwoScore.includes(letter)) {
      sum = sum + 2
    } else if (alphabetThreeScore.includes(letter)) {
      sum = sum + 3
    } else if (alphabetFourScore.includes(letter)) {
      sum = sum + 4
    } else if (alphabetFiveScore.includes(letter)) {
      sum = sum + 5
    } else if (alphabetEightScore.includes(letter)) {
      sum = sum + 8
    } else if (alphabetTenScore.includes(letter)) {
      sum = sum + 10
    } else {
      sum = sum + 0
    }
  }
  return sum
};

console.log(score('OxyphenButazone'))
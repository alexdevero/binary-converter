// CLI version of binary converter

const readline = require('readline')

const { convertInput, convertInputReverse } = require('./binary-converter')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const init = () => {
  rl.question('Do you want to convert text to binary or binary to text (latin)? (Y = text to binary / N = binary to text) \n', (answerZero) => {
    if (answerZero.toLowerCase() === 'y') {
      rl.question('What text would you like to convert to binary? \n', (answerOne) => {
        convertInput(answerOne)

        rl.question('Do you want to convert another text? (Y/N) \n', (answerTwo) => {
          if (answerTwo.toLowerCase() === 'y') {
            init()
          } else {
            rl.close()
          }
        })
      })
    } else {
      rl.question('What binary text would you like to convert to text (latin)? \n', (answerThree) => {
        convertInputReverse(answerThree)

        rl.question('Do you want to convert another text? (Y/N) \n', (answerFour) => {
          if (answerFour.toLowerCase() === 'y') {
            init()
          } else {
            rl.close()
          }
        })
      })
    }
  })
}

init()

let { RLMencode, RLMdecode } = require('./RLM-key')
let { symbolEncode, symbolDecode } = require('./Symbol-key')

// RELEVANT FUNCTIONS FOR SYMBOL ENCODER FUNCTION
    // Generates random letter string based on passed in message
        const randomLetterEncoder = (message) => {
            let output = ''

            for(let i = 0; i < message.length; i++){
                output += RLMencode[message[i]]
            }

            return output
        }

    // Finds ascii code for each random letter, multiplies by '(Math.PI/Math.sqrt(64))', and returns a string of all the numbers combined
        const multiplyAscii = (message) => {
            let output = []
            for(let i = 0; i < message.length; i++){
                let ascii = message[i].charCodeAt()
                let num = Math.floor(ascii * (Math.PI/Math.sqrt(64)))
                output.push(num)
            }
            return output
        }
    
    // Converts Numbers to Binary
        const convertNumberToBinary = (number) => {
            let index = Math.floor(Math.log2(number))
            let operator = Math.pow(2, index)
            let bin = ''
            let unused = 7 - index

            for (let j = 0; j < unused; j++) {
                bin += '0'
            }

            for (let i = 0; i <= index; i++){
                if (number !== 0) {
                    if (number >= operator) {
                        bin += '1'
                        number -= operator
                    } else {
                        bin += '0'
                    }
                    operator /= 2
                }
            }
            
            
            if (bin === '') {
            return '0' 
            } 

            return bin
        }

    // Convert Binary String to Binary Array 
        const convertBinarytoBinaryArray = (binary) => {
            let output = []
            let binArray = binary.split('')
            let iterations = binArray.length

            for (let i = 0; i < iterations / 4; i++) {
                if (binArray.length > 4){
                    let index = binArray.length - 4
                    output.push(binArray.splice(index, 4).join(''))
                }
            }

            let size = 4 - binArray.length
            let binOut = binArray.join('')

            for(let i = 0; i < size; i++){
                binOut += '0'
            }

            output.push(binOut)

            return output
        }

    // Convert Binary Array into Symbol Encoded Message
        const encodeToSymbol = (binArray) => {
            let output = ''

            for(let i = 0; i < binArray.length; i++){
                output += symbolEncode[binArray[i]]
            }

            return output
        }



// ** MAIN ENCODER FUNCTION ** //

const symbolEncoder = (message) => {
    // Maps to Random Letters 
        let randomLetters = randomLetterEncoder(message)

    // Letters >> Generate Ascii Code and Multiply * PI/SQRT(64) 
        let multipliedAscii = multiplyAscii(randomLetters)

    // Multiplied Ascii Number >> Binary 
        let asciiBinaryNum = []

        for (let i = 0; i < multipliedAscii.length; i++) {
            asciiBinaryNum.push(convertNumberToBinary(multipliedAscii[i]))
        }
        
        asciiBinaryNum = asciiBinaryNum.join('')

    // Binary >> Binary Array of strings at length of 4
        let asciiBinArray = convertBinarytoBinaryArray(asciiBinaryNum)

    // Binary Array >> Symbol
        let symbolEncoded = encodeToSymbol(asciiBinArray)
    
    return symbolEncoded
}

console.log(symbolEncoder('Hey my name is Alson'))



// ** MAIN DECODER FUNCTION ** //
const symbolDecoder = (encodedString) => {
    // Symbol >> Binary String
        let binaryString = []
        for (let i = 0; i < encodedString.length; i++) {
            binaryString.unshift(symbolDecode[encodedString[i]])
        }
        console.log(binaryString.join(''))

    // Binary String >> Ascii String

    // Ascii String >> Random Letters

    // Random letters >> Original Message

}

// console.log(symbolDecoder('^_%^_^}$&(_+^&(*)$)^)#$+%}%&()+-+@'))

module.exports = {symbolEncoder}
const {starDotEncode, starDotDecode} = require('./star-dot')

// **** UNIT TESTS **** //

const starDotEncodeTest = () => {
    let testMessage = 'Hi, my name is Alson'
    let expectedOutput = '.*..*....**.*..*..*.**....*......**.**.*.****..*..*......**.***..**....*.**.**.*.**..*.*..*......**.*..*.***..**..*......*.....*.**.**...***..**.**.****.**.***.'

    if (starDotEncode(testMessage) === expectedOutput) {
        return `** PASSED ** The returned value from the 'starDot' function is EQUAL to expectedOutput`
    } else {
        return `** FAILED ** The returned value from the 'starDot' function is NOT EQUAL to expectedOutput`
    }
}

console.log(starDotEncodeTest())

const starDotDecodeTest = () => {
    let testMessage = '.*..*....**.*..*..*.**....*......**.**.*.****..*..*......**.***..**....*.**.**.*.**..*.*..*......**.*..*.***..**..*......*.....*.**.**...***..**.**.****.**.***.'
    let expectedOutput = 'Hi, my name is Alson'

    if (starDotDecode(testMessage) === expectedOutput) {
        return `** PASSED ** The returned value from the 'starDot' function is EQUAL to expectedOutput`
    } else {
        return `** FAILED ** The returned value from the 'starDot' function is NOT EQUAL to expectedOutput`
    }
}

// console.log(starDotDecodeTest))
const {symbolEncoder} = require('./symbol-encoder')

// **** UNIT TESTS **** //

const symbolEncoderTest = () => {
    let testMessage = 'Hey my name is Alson'
    let expectedOutput = '-^}$!+-^$%+-!('

    if (symbolEncoder(testMessage) === expectedOutput) {
        console.log(`** PASSED ** The returned value from the 'symbolEncoder' function is EQUAL to expectedOutput`)
    } else {
        console.log(`** FAILED ** The returned value from the 'symbolEncoder' function is NOT EQUAL to expectedOutput`)
    }
}

symbolEncoderTest()
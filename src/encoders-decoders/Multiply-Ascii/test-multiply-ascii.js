const {multiplyAscii} = require('./multiply-ascii')

// **** UNIT TESTS **** //

const multiplyAsciiTest = () => {
    let testMessage = 'Hi, my name is Alson'
    let expectedOutput = '1442108864218242642201942182026421023064130216230222220'

    if (multiplyAscii(testMessage) === expectedOutput) {
        console.log(`** PASSED ** The returned value from the 'multiplyAscii' function is EQUAL to expectedOutput`)
    } else {
        console.log(`** FAILED ** The returned value from the 'multiplyAscii' function is NOT EQUAL to expectedOutput`)
    }
}

multiplyAsciiTest()
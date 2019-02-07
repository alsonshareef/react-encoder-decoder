const {mapEncoder} = require('./lettermapping')

// **** UNIT TESTS **** //

// Testing mapEncoder function
const mapEncoderTest = () => {
    let testMessage = 'Hi, my name is Alson'
    let expectedOutput = '349935313255314113553919532712191514'

    if (mapEncoder(testMessage) === expectedOutput) {
        console.log(`** PASSED ** The returned value from the 'mapEncoder' function is EQUAL to expectedOutput`)
    } else {
        console.log(`** FAILED ** The returned value from the 'mapEncoder' function is NOT EQUAL to expectedOutput`)
    }
}

mapEncoderTest()
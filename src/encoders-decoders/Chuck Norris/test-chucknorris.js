const { fullEncoder, fullDecoder } = require('./chucknorris')


// **** UNIT TESTS **** //

// Testing fullEncoder function
    const fullEncoderTest = () => {
        let testMessage = 'Alson'
        let expectedOutput = '00 0 0 0 00 00000 0 0 00 0 0 00 00 0 0 00 00 000 0 000 00 00 0 00 00 0 0 00 00 0 0 0000 00 0 0 00 00 0 0 000 00 0'

        if (fullEncoder(testMessage) === expectedOutput) {
            console.log(`** PASSED ** The returned value from the 'fullEncoder' function is EQUAL to expectedOutput`)
        } else {
            console.log(`** FAILED ** The returned value from the 'fullEncoder' function is NOT EQUAL to expectedOutput`)
        }
    }

    fullEncoderTest()

// Testing fullDecoder function
    const fullDecoderTest = () => {
        let testMessage = '00 0 0 0 00 00000 0 0 00 0 0 00 00 0 0 00 00 000 0 000 00 00 0 00 00 0 0 00 00 0 0 0000 00 0 0 00 00 0 0 000 00 0'
        let expectedOutput = 'Alson'

        if (fullDecoder(testMessage) === expectedOutput) {
            console.log(`** PASSED ** The returned value from the 'fullDecoder' function is EQUAL to expectedOutput`)
        } else {
            console.log(`** FAILED ** The returned value from the 'fullDecoder' function is NOT EQUAL to expectedOutput`)
        }
    }

    fullDecoderTest()
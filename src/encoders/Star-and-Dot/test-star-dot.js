const {starDot} = require('./star-dot')

// **** UNIT TESTS **** //

const starDotTest = () => {
    let testMessage = 'Hi, my name is Alson'
    let expectedOutput = '*..**.*...*.**.*..****..*.*.****..*.....*..**...****'

    if (starDot(testMessage) === expectedOutput) {
        console.log(`** PASSED ** The returned value from the 'starDot' function is EQUAL to expectedOutput`)
    } else {
        console.log(`** FAILED ** The returned value from the 'starDot' function is NOT EQUAL to expectedOutput`)
    }
}

starDotTest()
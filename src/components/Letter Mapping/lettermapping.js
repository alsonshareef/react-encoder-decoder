const mapEncoder = (message) => {
    let output = ''
    let encodeMap = {
        
    }

    for(let i = 0; i < message.length; i++){
        output += encodeMap[message[i]]
    }

    return output
}

console.log(mapEncoder())
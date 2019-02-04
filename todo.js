
// First Algorithm
    // Receiver has key to decrypte code
    /* e.g. 
    
    Real Message: Hello

    Key = {
        H: 10
        e: 11
        l: 12
        o: 13
    } 

    Encoded Message: 1011121213
    
    */



// Second Algorithm
    /* e.g.
        Real Message: Hello
        
    Key = for(let i = 0; i < msg.length; i++){
	let num = msg[i].charCodeAt(0)
	console.log(String.fromCharCode(num * 2))
}
    
    Operation = {
        H: 72 * 2 = 144
        e: 101 * 2 = 202
        l: 108 * 2 = 116
        o: 111 * 2 = 222
    } 

    Encoded Message: 144202116222

    */



// Third Algorithm
    // Type = 00 or 01, Num >> Binary >> 0 = *, 1 = .

    // 101101010101 (Type = * or .)
    // *.**.*.*.*.*.

    // Binary Example:
    // 0101011010010 (Type = 1 or 0, Num = Binary)



// Fourth Algorithm
    /*
        Maps letters >> Random Letter >> Generate Ascii Code >> Multiply * PI/SQRT(64) >> Binary >> Symbol:

        ! = 0000
        @ = 0001
        # = 0010
        $ = 0011
        % = 0100
        ^ = 0101
        & = 0110
        * = 0111
        ( = 1000
        ) = 1001
        _ = 1010
        - = 1011
        + = 1100
        { = 1101
        } = 1110
        | = 1111
    */



// Summary:
    /*
        1st Algo: Map letters (COMPLETED)
        2nd Algo: Turn message to Ascii >> Multiply by 2 (COMPLETED)
        3rd Algo: (Star-Dot) Ascii >> Binary >> Type and Num >> * and . (COMPLETED, but confirm with naanu)
        4th Algo: (Symbol) Maps to Random Letters >> Generate Ascii Code and Multiply * PI/SQRT(64) >> Binary >> Symbol (COMPLETED)
        
        ** WRITE TESTS FOR:
            Chuck Norris (COMPLETED)
            Letter Mapping (COMPLETED)
            Multiply-Ascii (COMPLETED)
            Star-and-Dot (COMPLETED)
            Symbol (COMPLETED)

        ** Also look at: 
            Better way to import encoding keys for symbol encoder
            Star-Dot potential bug : There are so many dots; the 'number' variable hits 0 before loop has finished,
             making the rest of the loop with number variable = 0 add '0' to the end of binaryNum

        ** UI
            Start integrating all the encoder functions into the UI:
                - Create dropdown menu with selection functionality (COMPLETED)
                - Start working on main component with 2 textareas for input/output, and connect dropdown menu selection to respective encoder/decoder functions

    */

const cypher = (encoded) => {
    let arr = [];
    /* Only make changes below this comment */
    for (letter in encoded) {
        let ascii = encoded.charCodeAt(letter);
        console.log(`original: ${ascii} = to letter: ${encoded[letter]}`);
        if (ascii >= 65 && ascii <= 90) {
            ascii = ascii + 13;
            if (ascii > 90) {
                ascii = ascii - 26;
            };
        };
        if (ascii >= 97 && ascii <= 122) {
            ascii = ascii + 13;
            if (ascii > 122) {
                ascii = ascii - 26;
            };
        };
        console.log(`convert: ${ascii} = char: ${String.fromCharCode(ascii)}`);
        console.log('-----------------------');

        arr.push(String.fromCharCode(ascii));
    };
    result = arr.join('');
    return result;
    /* Only make changes above this comment */
};
console.log(cypher('JRYPBZR GB VGX!'));
console.log(cypher('jrypbzr gb vgx!'));
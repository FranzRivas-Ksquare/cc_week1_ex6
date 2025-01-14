/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (encoded) => {
    
    /* Only make changes below this comment */
    let arr = [];
    for (letter in encoded) {
        let ascii = encoded.charCodeAt(letter);
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
        arr.push(String.fromCharCode(ascii));
    };
    result = arr.join('');
    return result;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;
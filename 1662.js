// 1662. Check If Two String Arrays are Equivalent

let word1 = ["a", "cb"]
let word2 =  ["ab", "c"]




var ArrayStringsAreEqual = function(word1, word2){
    let newWord1 = word1.join('');
    let newWord2 = word2.join('');

    if(newWord1 === newWord2){
        return true;
    }else{
        return false;
    }
}

console.log(ArrayStringsAreEqual(word1, word2));
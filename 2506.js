// Count Pairs Of Similar Strings.


// You are given a 0-indexed string array words.
// Two strings are similar if they consist of the same characters.
//     For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
//     However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.


let words = ["aba","aabb","abcd","bac","aabc"];

var similarPairs = function(words){
    let count = 0;
    for(let i = 0; i<words.length; i++){
        words[i] = Array.from(new Set(words[i].split(''))).sort().join('')
    }

    for(let i = 0; i<words.length; i++){
        for(let j = i + 1; j < words.length; j++) {
            if (words[i] == words[j]) count ++
        }
    }
    return count;
};

console.log(similarPairs(words));
function lengthOfLastWord(str){
    const word = str.trim();
    return word.length - word.lastIndexOf(' ')-1;
}

const str = 'Hello World';
console.log(lengthOfLastWord(str));
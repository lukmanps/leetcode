function isPaliandrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let i = 0; i <=cleanedStr.length / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
            return false;
        } 
        return true;
    }
}

const str = 'raceacar';

console.log(isPaliandrome(str));
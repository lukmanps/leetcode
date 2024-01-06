const countDigit = (num) => {
    let count = 0;
    let n = num;
    while (num > 0) {
        let val = num % 10;
        if (n % val === 0) {
            count++;
            num = Math.floor(num/10);
        } else {
            num = Math.floor(num/10);
        }
    }
    return count;
}

console.log(countDigit(1248));
function paliandrome(x){
    let num = x
    let rev = 0
    while(x > 0){
        let rem = x % 10;
        rev = rev * 10 + rem;
        x = Math.floor(x/10);
    }

    if(rev === num){
        return true
    } else {
        return false
    }
}

console.log(paliandrome(121))
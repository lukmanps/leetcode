const strStr = (haystack, needle) => {
    if(haystack === needle){
        return 0;
    }
    const needleLength = needle.length;

    for(let i = 0; i<haystack.length; i++){
        if(haystack.substring(i, i+needleLength) === needle){
            return i;
        }
    }
    return -1;
}

console.log(strStr('sadbutsad', 'sad'));
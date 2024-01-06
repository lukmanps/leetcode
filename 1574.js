const findLengthOfShortestSubArray = (arr) => {
    let start = 0;
    const n = arr.length;
    let end = n-1;

    while(start < n-1 && arr[start] <= arr[start+1]) start++;
    if(start === n-1) {
        return 0;
    }

    while(end >= start && arr[end] >= arr[end-1]) end--;

    let result = Math.min(n-1-start, end);

    let i = 0, j=end;

    while(i<=start && j<n){
        if(arr[j] >= arr[i]){
            result = Math.min(result, j-i-1);
            i++
        } else {
            j++
        }
    }

    return result;
    
}

const arr = [1,2,3,10,4,2,3,5];
console.log(findLengthOfShortestSubArray(arr));




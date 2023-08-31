let arr = [1,2,3,1];

function containDuplicates(arr, k){
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i] === k){
            for(let j = i+1; j<arr.length; j++){
                if(arr[j] === k ){
                    return false;
                }else{
                    return true;
                }
            }
        }
    }
}

console.log(containDuplicates(arr, 1));
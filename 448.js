let arr = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumber(arr));

function findDisappearedNumber(nums) {
let missingNums = [];

let mySet = new Set(nums);

for(let i = 0; i<nums.length; i++){
    if(!mySet.has(i+1)){
        missingNums.push(i+1);
    }
}


return missingNums;


}
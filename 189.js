const revNums = (nums, start, end) => {
    while(start < end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
const rotate = (nums, k) => {
    k = k % nums.length
    nums.reverse();
    revNums(nums, 0, k-1);
    revNums(nums, k-1, nums.length-1);
}



const arr = [1,2,3,4,5,6,7]
const k = 3;

console.log(rotate(arr, k))
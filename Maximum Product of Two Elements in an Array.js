// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let stack=[];
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            let c= (nums[i]-1)*(nums[j]-1);
            stack.push(c)

        }
    }
    return Math.max(...stack)
};
 
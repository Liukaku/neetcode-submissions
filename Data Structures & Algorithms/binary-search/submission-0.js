class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    binarySearch(l, r ,nums, target){
        if(l > r){
            return -1
        }

        const mid = l + Math.floor((r - l) / 2)
        
        if(nums[mid] === target){
            return mid
        }

        if(nums[mid] > target){
            return this.binarySearch(l, mid - 1, nums, target) 
        } else {
            return this.binarySearch(mid + 1, r, nums, target)
        }
    }

    search(nums, target) {
        return this.binarySearch(0, nums.length - 1, nums, target)
    }
}

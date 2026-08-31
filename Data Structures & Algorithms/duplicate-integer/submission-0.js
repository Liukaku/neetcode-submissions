class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let check = {}
        let returnVal = false
        for(const n in nums){
            if(check[nums[n]] != null){
                console.log(n)
                returnVal = true
                break
            } else {
                check[nums[n]] = 1
            }
        }

        return returnVal
    }
}

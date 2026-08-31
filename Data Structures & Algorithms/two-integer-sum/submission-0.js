class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {}
        let returnVal = []
        for(const n in nums){
            const curr = nums[n]
            if(obj[target - curr] == null){
                console.log(n, curr)
                obj[curr] = Number(n)
            } else {
                returnVal = [obj[target - curr], Number(n)]
                break
            }
        }
        return returnVal
    }
}

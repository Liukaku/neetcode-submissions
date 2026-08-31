class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = []

        for(let i = 0; i< nums.length; i++){
            const copy = Array.from(nums)
            copy.splice(i, 1)
            const val = copy.reduce((sum, n) => sum *= n)
            res.push(val)
        }
        return res
    }
}


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        /*
        {
            0: 1
            1: 14
            2: 3
            4: 1
        }
        */
        const freq = {}
        for(let i = 0; i <= nums.length; i++){
            freq[i] = []
        }
        for(const n in nums){

            count[nums[n]] = 1 + (count[nums[n]] ?? 0)
        }
        console.log(freq)
        for(const n in count){
            freq[count[n]].push(n)
        }
        console.log(count)
        console.log(freq)
    
        const returnVal = []
        for(let i = nums.length; i >= 0; i--){
            if(returnVal.length == k) {
                break
            }

            for(const n in freq[i]){
                returnVal.push(freq[i][n])
                
                if(returnVal.length === k) {
                    break
                }
            }
        }
        return returnVal

    }
}

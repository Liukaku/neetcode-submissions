class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val mem = mutableMapOf<Int, Int>()
        var res = intArrayOf()

        for(i in nums.indices){
            val diff = target - nums[i]
            val got = mem[diff]
            if(got !== null){
              res = intArrayOf(got, i)
              return  res
            }  
            mem[nums[i]] = i
        }
        return res
    }
}

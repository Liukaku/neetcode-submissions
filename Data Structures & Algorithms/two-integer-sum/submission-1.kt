class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val mem = mutableMapOf<Int, Int>()
        var res = intArrayOf()

        for(i in nums.indices){
            val num = nums[i]
            val diff = target - num
            val got = mem[diff]
            if(got !== null){
              res = intArrayOf(got, i)
              return  res
            }  
            mem[num] = i
        }
        return res
    }
}

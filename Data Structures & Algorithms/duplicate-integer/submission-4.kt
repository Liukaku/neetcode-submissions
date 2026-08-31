class Solution {
    fun hasDuplicate(nums: IntArray): Boolean {
        val hasSeen: MutableMap<Int, Int> = mutableMapOf()
        
        for(num in nums){
            if(hasSeen.containsKey(num)) return true
            hasSeen[num] = 1
        }
        
        return false
    }
}

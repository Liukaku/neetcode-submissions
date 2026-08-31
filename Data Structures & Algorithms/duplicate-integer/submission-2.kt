class Solution {
    fun hasDuplicate(nums: IntArray): Boolean {
        val hasSeen: MutableMap<Int, Int> = mutableMapOf()
        
        nums.forEach {
            if(hasSeen.containsKey(it)) return true
            hasSeen[it] = 1
        }
        
        return false
    }
}

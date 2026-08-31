class Solution {
    fun isAnagram(s: String, t: String): Boolean {
        val res: MutableMap<Char, Int> = mutableMapOf()
        val resTwo: MutableMap<Char, Int> = mutableMapOf()

        s.toList().forEach {
            res[it] = res[it]?.plus(1) ?: 1
        }
        t.toList().forEach {
            resTwo[it] = resTwo[it]?.plus(1) ?: 1
        }
        
        return res == resTwo
    }
}

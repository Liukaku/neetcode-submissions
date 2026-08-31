class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let vals = new Set()
        let res = 0
        for(let r = 0; r < s.length; r++){
            while(vals.has(s.charAt(r))){
                vals.delete(s[l])
                l++
            }
            vals.add(s.charAt(r))
            res = Math.max(res, r - l + 1)
        }
        return res
    }
}

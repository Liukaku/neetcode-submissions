class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.split(" ").join("").toLowerCase()
        let l = 0
        let r = s.length - 1
        while(l < r){
            while(l < r && !this.alphaNum(s.charAt(l))){
                l++
            }
            while(r > l && !this.alphaNum(s.charAt(r))){
                r--
            }
            if(s.charAt(l) !== s.charAt(r)){
                return false
            }
            l++
            r--
        }
        return true
    }

    alphaNum(c) {
        return (c >= 'A' && c <= 'Z' || 
                c >= 'a' && c <= 'z' || 
                c >= '0' && c <= '9');
    }
}

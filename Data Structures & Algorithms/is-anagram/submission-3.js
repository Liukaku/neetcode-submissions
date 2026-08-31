class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.split("").length !== t.split("").length){
            return false
        }

        const objOne = {}
        const objTwo = {}
        for(const n in s){
            objOne[s[n]] = 1 + (objOne[s[n]] ?? 0)
            objTwo[t[n]] = 1 + (objTwo[t[n]] ?? 0)
        }

        let returnVal = true
        for(const n in objOne){
            console.log(n, objOne[n])
            console.log(n, objTwo[n])
            if(objOne[n] !== objTwo[n]){
                returnVal = false
                break
            }
        }
        return returnVal
        


    }
}

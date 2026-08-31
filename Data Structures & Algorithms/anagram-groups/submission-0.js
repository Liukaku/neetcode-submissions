class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
            let groups = {}
            for(const n in strs){
                const str = strs[n]
                const sortedStr = str.split("").sort().join("")
                if(groups[sortedStr]){
                    groups[sortedStr].push(str)
                } else {
                    groups[sortedStr] = [str]
                }
            }
            return Object.values(groups)
        };
    
}

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = ""
        strs.forEach((val) => {
            s += `${val.length}#${val}`
        })
        console.log(s)
        return s
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = []
        let i = 0
        while(i < str.length){
            let n = i
            while(str[n] !== "#"){
                n++
            }
            const len = parseInt(str.substring(i, n))
            i = n + 1
            n = i + len
            const res = str.substring(i, n)
            arr.push(res)
            i = n
        }
        return arr
    }
}

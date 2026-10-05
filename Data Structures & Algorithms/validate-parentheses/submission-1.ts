class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length % 2 !== 0) return false
        const brackets = new Map([
            ["]", "["],
            ["}", "{"],
            [")", "("]
        ])
        
        const stack: string[] = []
        
        const arr = s.split("")
        for(let i = 0; i < arr.length; i++){
            // if it is a closing bracket
            if(brackets.has(arr[i])){
                //if it is
                const last = stack.pop()

                if(brackets.get(arr[i]) === last) continue
                return false

            // must be opening bracket, add to heap
            } else {
                stack.push(arr[i])
            }
        }

        return stack.length === 0
    }
}
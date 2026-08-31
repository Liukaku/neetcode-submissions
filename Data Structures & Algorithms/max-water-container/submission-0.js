class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ret = 0
        for(let l = 0; l < heights.length; l++){
            for(let r = heights.length - 1; r > l; r--){
                const calc = Math.min(heights[l], heights[r]) * (r - l)
                if(calc > ret){
                    ret = calc
                }
            }
        }
        return ret
    }
}

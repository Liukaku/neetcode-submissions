class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        //[0,2,0,3,1,0,1,3,2,1]
        /*
        8

        l 3
        r 3 1
        */
        if(!height || height.length === 0){
            return 0
        }

        let l = 0
        let r = height.length - 1
        let lMax = height[l]
        let rMax = height[r]
        let sum = 0
        while(l < r){
            if(lMax < rMax){
                l++
                lMax = Math.max(lMax, height[l])
                sum += lMax - height[l]
            } else {
                r--
                rMax = Math.max(rMax, height[r])
                sum += rMax - height[r]
            }
        }

        return sum
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let r = 1
        let p = 0

        while(r < prices.length){
            if(prices[l] < prices[r]){
                const profit = prices[r] - prices[l]
                p = Math.max(p, profit)
            } else {
                l = r
            }
            r++
        }
        return p
    }
}

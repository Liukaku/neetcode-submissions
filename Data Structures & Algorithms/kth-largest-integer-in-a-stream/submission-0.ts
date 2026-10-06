class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.minHeap = nums.sort((a,b) => b-a).slice(0, k)
        this.kth = k
    }

    private minHeap: number[] = []
    private kth: number

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.minHeap.push(val)
        this.minHeap.sort((a,b) => b-a).slice(0, this.kth)
        return this.minHeap[this.kth - 1]
    }
}

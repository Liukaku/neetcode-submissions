class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        if(stones.length === 0) return 0

        let heap: number[] = stones.sort((a,b) => b - a)
        while(heap.length > 1){
            const l = Math.max(heap[0], heap[1])
            const r = Math.min(heap[0], heap[1])
            const rem = l - r
            if(rem > 0) {
                heap.push(rem)
            }
            heap = heap.splice(2, heap.length).sort((a,b) => b - a)
        }

        return heap[0] ?? 0
    }
}

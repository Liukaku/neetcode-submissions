class Solution {

    /**
     * @param {number} l
     * @param {number} r
     * @return {number}
     */
    middleIndex(l, r){
        return l + Math.floor((r - l) / 2)
    }

    /**
     * @param {number} l
     * @param {number} r
     * @param {number[]} matrix
     * @param {number} target
     * @return {boolean}
     */
    dfs(l, r, matrix, target){
        if(l > r){
            console.log(l)
            console.log(r)
            console.log(matrix)
            return false
        }

        const m = this.middleIndex(l, r)

        if(matrix[m] === target){
            return true
        }

        if(matrix[m] > target){
            return this.dfs(l, m - 1, matrix, target)
        } else {
            return this.dfs(m + 1, r, matrix, target)
        }
    }

    /**
     * @param {number} l
     * @param {number} r
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    fbs(l, r, matrix, target){
        if(l > r){
            console.log(l, r)
            return false
        }

        const m = this.middleIndex(l, r)
        const mMatrix = matrix[m]

        if(mMatrix[0] === target || mMatrix[mMatrix.length - 1] === target){
            return true
        }

        if(mMatrix[0] > target){
            return this.fbs(l, m - 1, matrix, target)
        } else if(mMatrix[mMatrix.length - 1] < target){
            return this.fbs(m + 1, r, matrix, target)
        } else {
            return this.dfs(0, mMatrix.length - 1, mMatrix, target)
        }
        
    }

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        return this.fbs(0, matrix.length - 1, matrix, target)
    }
}

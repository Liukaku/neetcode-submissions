class MinStack {
    constructor() {}

    private stack: number[] = []
    private sortedStack: number[] = []

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        if(this.sortedStack.length === 0 ){
            this.sortedStack.push(val)
            return
        } 
        const min = this.sortedStack[this.sortedStack.length - 1]
        this.sortedStack.push(Math.min(val, min))
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
        this.sortedStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.sortedStack[this.sortedStack.length - 1]
    }    
}

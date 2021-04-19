class Stack {
    array: string[]

    constructor(initial: string[] = []) {
        this.array = initial
    }

    show(): this {
        try {
            if (this.array.length != 0) {
                console.log('Displaying Stack Items :')
                for (let index = this.array.length; index > 0; index--) {
                    const item = this.array[index - 1];
                    console.log(`${index} --> ${item}`)
                }
            } else {
                console.log('Stack is empty, try add something')
            }
        } catch (error) {
            console.log(error)
        }
        return this
    }

    add(value: string): this {
        try {
            this.array.push(value)
        } catch (error) {
            console.log(error)
        }
        return this
    }

    take(): string {
        try {
            if (this.array.length != 0) {
                return this.array.pop()
            } else {
                console.log('Stack is empty, try add something')
            }
        } catch (error) {
            console.log(error)
        }
    }
}

class Queue {
    array: string[]

    constructor(initial: string[] = []) {
        this.array = initial
    }

    show(): this {
        try {
            if (this.array.length != 0) {
                console.log('Displaying Queue Items :')
                this.array.forEach((item, index) => {
                    console.log(`${index + 1} --> ${item}`)
                });
            } else {
                console.log('Queue is empty, try add something')
            }
        } catch (error) {
            console.log(error)
        }
        return this
    }

    add(value: string): this {
        try {
            this.array.push(value)
        } catch (error) {
            console.log(error)
        }
        return this
    }

    take(): string {
        try {
            if (this.array.length != 0) {
                return this.array.shift()
            } else {
                console.log('Stack is empty, try add something')
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const stack = new Stack()
stack
    .add('Philip Purwoko')
    .add('Budi Setiawan')
    .add('Carl Johnson')
    .show()

console.log(`Taken Item : ${stack.take()}`)
console.log(`Taken Item : ${stack.take()}`)
stack.show()


const queue = new Queue()
queue
    .add('Philip Purwoko')
    .add('Budi Setiawan')
    .add('Carl Johnson')
    .show()

console.log(`Taken Item : ${queue.take()}`)
console.log(`Taken Item : ${queue.take()}`)
queue.show()
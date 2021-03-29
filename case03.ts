class LinkedList {
    head: Vertice | null = null
    tail: Vertice | null = null
    array: (number | string)[]

    constructor(array: (number | string)[]) {
        this.array = array
    }

    addToEnd(value: number | string) {
        let newPointer = this.head
        const newVertice = new Vertice(value)
        if (newPointer == null) {
            this.head = newVertice
        } else {
            while (newPointer.pointing) {
                newPointer = newPointer.pointing
            }
            newPointer.pointing = newVertice
            this.tail = newVertice
        }
    }

    addToStart(value: number | string) {
        const pointing = this.head
        if (pointing == null) {
            this.head = new Vertice(value)
        } else {
            this.head = new Vertice(value, this.head)
        }
    }

    convert() {
        for (let index = 0; index < this.array.length; index++) {
            const element = this.array[index]
            this.addToEnd(element)
        }
    }

    display() {
        let currentVertice = this.head
        if (currentVertice == null) {
            console.log('Linked List is Empty')
        } else {
            let list = String(currentVertice.value)
            while (currentVertice.pointing) {
                list += ` --> ${currentVertice.pointing.value}`
                currentVertice = currentVertice.pointing
            }
            console.log(list)
        }
    }
}

class Vertice {
    value: string | number
    pointing: Vertice

    constructor(value: number | string, pointing: Vertice | null = null) {
        this.value = value
        this.pointing = pointing
    }
}

const linkedList = new LinkedList([1, 2, 3, 4, 5])
linkedList.convert()
linkedList.addToEnd(10)
linkedList.addToEnd(15)
linkedList.addToStart(-10)
linkedList.addToStart(-15)
linkedList.display()
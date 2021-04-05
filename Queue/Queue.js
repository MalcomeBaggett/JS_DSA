class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }

    IsEmpty() {
        if (!this.head) return true
        return false
    }

    Enqueue(val) {
        let node = new Node(val)
        if (this.IsEmpty()) {
            this.head = node
            this.tail = node
            return this
        }
        // let curr = this.head
        // while(curr.next) {
        //     curr = curr.next
        // }

        // curr.next = node
        // this.tail = node
        let temp = this.tail
        temp.next = node
        this.tail = node

        return this
    }

    Dequeue() {
        if(this.IsEmpty()) return null

        let dequeued = this.head
        this.head = dequeued.next
        dequeued.next = null
        
        return this
    }

    Peek() {
        return this.head.val
    }
}

const msgQ = new Queue()

msgQ.Enqueue("Hello")
msgQ.Enqueue("World")
msgQ.Enqueue("Here!")
console.log(msgQ.Peek())
msgQ.Dequeue()

console.log(msgQ)
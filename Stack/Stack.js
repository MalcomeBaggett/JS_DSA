class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constuctor() {
        this.head = null
        this.root = null
    }

    Push(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        }

        let curr = this.head
        curr.next = node
        this.head = node

        return this
    }

    Pop() {
        if (!this.head) return null

        let deleted = this.head
        this.head = deleted.next
        deleted.next = null

        return deleted
    }

    Peek() {
        if (this.head) {
            return this.head.val
        }
        return null
    }
}
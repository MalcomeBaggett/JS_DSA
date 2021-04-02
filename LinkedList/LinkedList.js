class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    Append(val) {
        let newNode = new Node(val)

        if(!this.head) {
            this.tail = newNode
            this.head = newNode
            return this
        }

        let curr = this.head
        while(curr) {
            if(curr.next == null) {
                curr.next = newNode
                this.tail = newNode
                return this
            }
            curr = curr.next
        }
    }

    Print() {
        if(!this.head) return false

        let curr = this.head
        let string = ''
        while (curr) {
            string += `${curr.val} -> `
            curr = curr.next
        }
        string += ' null'

        return string
    }

    Prepend(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return this
        }

        let curr = this.head

        newNode.next = curr
        this.head = newNode
    }

    Delete(val) {
        if(!this.head) return false
        
        let deleted = null

        if (this.head.value === val) {
            deleted = this.head
            this.head = this.head.next
        }

        let curr = this.head
        let prev = curr

        while (curr) {
            while (curr.next) {
                if (curr.next.val === val) {
                    deleted = curr.next.val
                    curr.next = curr.next.next
                } else {
                    curr = curr.next
                }
           }
        }

        if (this.tail.val === val) {
            deleted = this.tail
            this.tail = curr

        }

        return deleted
    }
}

let LL = new LinkedList()

for(i = 0; i <= 15; i++) {
    let num = Math.floor(Math.random() * Math.floor(15)) +1
    LL.Append(num)
}

console.log(LL.Print())
LL.Prepend(20)
console.log(LL.head)
console.log(LL.Print())
LL.Prepend(50)
console.log(LL.head)
console.log(LL.Print())
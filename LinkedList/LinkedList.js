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

     

            while (curr.next) {
                if (curr.next.val === val) {
                    deleted = curr.next
                    curr.next = curr.next.next
                } else {
                    curr = curr.next
                }

            }
 


        if (this.tail.val === val) {
            deleted = this.tail
            this.tail = curr

        }
        return deleted
    }

    Reverse() {
        if (!this.head) return null

        let curr = this.head
        let prev = null

        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        let temp = this.head
        this.head = this.tail
        this.tail = temp
        return this
    }

    DeleteHead() {
        if (!this.head) return null

        let temp = this.head.next
        let deleted = this.head
        deleted.next = null
        this.head = temp

        return this
        
    }

    DeleteTail() {
        if (!this.head) return null

        let curr = this.head
        let prev = null

        while (curr.next !== null) {
            prev = curr
            curr = curr.next
        }

        this.tail = prev
        this.tail.next = null
        
        return curr
    }
}

let LL = new LinkedList()

// for(i = 0; i <= 15; i++) {
//     let num = Math.floor(Math.random() * Math.floor(15)) +1
//     LL.Append(num)
// }

// console.log(LL.Print())
// LL.Prepend(20)
// console.log(LL.head)
// console.log(LL.Print())
// LL.Prepend(50)
// console.log(LL.head)
// console.log(LL.Print())

// LL.Append(1)
// LL.Append(2)
// LL.Append(5)
// LL.Append(7)
// LL.Append(15)

// console.log(LL.Delete(2))
// console.log(LL.Delete(15))
// LL.Reverse()

// LL.DeleteHead()
// LL.DeleteTail()
// console.log(LL.Print())
// console.log(LL.head)
// console.log(LL.tail)
module.exports = {
     LinkedList
 }
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    Insert(val) {
        console.log('hit')
        let newNode = new Node(val)
        if(this.root === null ){
            this.root = newNode
            return this
        } else {
            let current = this.root
            while(true) {
                  if (current.val === val) return undefined
                  if (val < current.val) {
                      if (current.left === null) {
                          current.left = newNode
                          return this 
                      } else {
                          current = current.left
                      }
                  } if (val > current.val) {
                      if (current.right === null) {
                          current.right = newNode
                          return this
                      } else {
                          current = current.right
                      }
                  }
            }
        }
    }

    Find(val) {
         if (this.root === null) {
             return undefined
         }
         let current = this.root

         while (true) {
             if (val === current.val){
                 return current
             }
             else if (val < current.val) {
                 if (current.left) {
                     current = current.left
                 } else{
                     return undefined
                 }
             } else if (val > current.val) {
                 if (current.right) {
                     current = current.right
                 } else {
                     return undefined
                 }
             }
         }
    }

    BFS() {
        const queue = []
        const visited = []

        if (this.root === null) {
            return undefined
        }

        queue.push(this.root)

        while (queue.length > 0) {
            let deQueued = queue.shift()
            console.log(deQueued)
            visited.push(deQueued)
            if (deQueued.left !== null) {
                queue.push(deQueued.left)
            }
            if (deQueued.right !== null) {
                queue.push(deQueued.right)
            }
        }
        return visited
    }
}

let bst = new BST()

for (i = 1; i <= 10; i++){
    bst.Insert(i)
}

console.log(bst.BFS())
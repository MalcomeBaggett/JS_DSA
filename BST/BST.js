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

        while (queue.length) {
            let deQueued = queue.shift()
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

    DFSPREORDER() {
        const visited = []
        let current = this.root
        let depthFirst = (node) => {
            visited.push(node)
            if (node.left){
                depthFirst(node.left)
            }
            if (node.right) {
                depthFirst(node.right)
            }
        }
        depthFirst(current)

        return visited
    }

    DFSPOSTORDER() {
        const visited = []
        let current = this.root

        let postOrder = (node) => {
            if (node.left) {
                postOrder(node.left)
            }

            if (node.right) {
                postOrder(node.right)
            }

            visited.push(node)
        }
        postOrder(current)
        return visited
    }

    DFSINORDER() {
        const visited = []
        let current = this.root

        let inOrder = (node) => {
            if (node.left) inOrder(node.left)
            visited.push(node)
            if (node.right) inOrder(node.right)
        }

        inOrder(current)
        return visited
    }
    
}

// let bst = new BST()

// bst.Insert(10)
// bst.Insert(6)
// bst.Insert(15)
// bst.Insert(3)
// bst.Insert(8)
// bst.Insert(20)

// console.log(bst.DFSINORDER())

module.exports = {
    Node,
    BST,
}
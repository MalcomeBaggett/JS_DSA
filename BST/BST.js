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
}

const bst = new BST()

for (i = 0; i < 10; i++){
    bst.Insert(i)
    console.log(i)
}

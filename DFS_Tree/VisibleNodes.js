//In a binary tree, a node is considered "visible" if no node on the root-to-itself path has a greater value. The root is always "visible" 
//since there are no other nodes between the root and itself. Given a binary tree, count the number of "visible" nodes.
const bst = require('../BST/BST')

let bst = new BST.BST()

bst.Insert(10)
bst.Insert(6)
bst.Insert(15)
bst.Insert(3)
bst.Insert(8)
bst.Insert(20)

let bstRoot = bst.root
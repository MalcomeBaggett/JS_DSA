//Max depth of a binary tree is the longest root-to-leaf path. Given a binary tree, find its max depth.
const BST = require('../BST/BST')

let bst = new BST.BST()

bst.Insert(10)
bst.Insert(6)
bst.Insert(15)
bst.Insert(3)
bst.Insert(8)
bst.Insert(20)

let bstRoot = bst.root

const MaxDepth = (node) => {
    if (!node) return 0 
    return Math.max(MaxDepth(node.left), MaxDepth(node.right)) +1
}

console.log(MaxDepth(bstRoot))
const BST = require('../BST/BST')

let bst = new BST.BST()

bst.Insert(10)
bst.Insert(6)
bst.Insert(15)
bst.Insert(3)
bst.Insert(8)
bst.Insert(20)

let bstRoot = bst.root

const IsBST = (node) => {
    return isBstHelper(node, Infinity, -Infinity)
}

const isBstHelper = (node, min, max) => {
    if (!node) return true

    if (node.val < min || node.val >= max) return false

    leftIsValid = isBstHelper(node.left, min, node.val)
}


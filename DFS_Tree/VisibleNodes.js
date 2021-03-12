//In a binary tree, a node is considered "visible" if no node on the root-to-itself path has a greater value. The root is always "visible" 
//since there are no other nodes between the root and itself. Given a binary tree, count the number of "visible" nodes.
const BST = require('../BST/BST')

let bst = new BST.BST()

bst.Insert(5)
bst.Insert(4)
bst.Insert(6)
bst.Insert(3)
bst.Insert(8)
    

let bstRoot = bst.root

const findVisibleNodes = (node) => {
    return dfs(node, Number.NEGATIVE_INFINITY)
}

const dfs =( node, num) => {
    if(!node) return 0
    let total = 0

    if (node.val >= num) {
        total += 1
    }

    total += dfs(node.left, Math.max(num, node.val))
    total += dfs(node.right, Math.max(num, node.right))
    return total
}

console.log(findVisibleNodes(bstRoot))
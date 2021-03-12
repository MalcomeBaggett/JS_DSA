const BST = require('./BST')

let bst = new BST.BST()

bst.Insert(10)
bst.Insert(6)
bst.Insert(15)
bst.Insert(3)
bst.Insert(8)
bst.Insert(20)



const bfs = (tree) => {
    const queue = []
    const visited = []
    let curr = tree.root
    queue.push(curr)

    while (queue.length) {
        let deQueued = queue.shift()
        visited.push(deQueued)
        if (deQueued.left) queue.push(deQueued.left)
        if (deQueued.right) queue.push(deQueued.right)
    }

    return visited
}

const maxDepth = (root) => {
    if (root === null) return 0;
    let curr = root
    return Math.max(maxDepth(curr.left) ,maxDepth(curr.right)) +1
}

const visibleNodes = (root) => {
    if (!root) return undefined
    let visible = 1
    let visited = []

    let dfs = (node) => {

    }
}

console.log(maxDepth(bst.root))
class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(data){
        let node = new Node(data);

        if(this.root == null){
            this.root = node;
        }else{
            this.insertNode(this.root,node);
        }
    }
    insertNode(root, newNode){
        if(newNode.data < root.data){
            if(root.left == null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode)
            }
        }else if(newNode.data > root.data){
            if(root.right == null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }
    getRootNode(){
        return this.root;
    }

    // recursive 
    preorder(root){ // P  L  R
        if(root !== null){
            console.log(root.data);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    // iterative
    preorderI(root){
        let result = [];
        if(root==null){
            return result;
        }
        var stack = []
        stack.push(root)
        while(stack.length != 0){
            let temp = stack.pop();
            result.push(temp.data);
            if(temp.right != null){
                stack.push(temp.right)
            }
            if(temp.left != null){
                stack.push(temp.left)
            }
        }
    return result;        
    }


}

var bst = new BinarySearchTree();

bst.insert(15)
bst.insert(25)
bst.insert(10)
bst.insert(7)
bst.insert(22)
bst.insert(17)
bst.insert(13)
bst.insert(5)
bst.insert(9)
bst.insert(27)

var root = bst.getRootNode();

console.log("Preorder");
bst.preorder(root)
console.log("\n");

console.log("Preorder");

console.log(bst.preorderI(root),"\n");

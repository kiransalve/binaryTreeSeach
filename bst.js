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

    // traversal 
    preorder(root){ // P  L  R
        if(root !== null){
            console.log(root.data);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    inorder(root){ // L P R
        if(root !== null){
            this.inorder(root.left);
            console.log(root.data);
            this.inorder(root.right);
        }
    }
    
    postorder(root){ // L R P
        if(root !== null){
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.data);
        }
    }
    search(root, key){
        if(root == null || root.data == key){
            return root;
        }
        // key is greater than root
        if(root.data < key){
            return this.search(root.right, key)
        }
        
        // key is smaller than root
        if(root.data > key){
            return this.search(root.left, key)
        }
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

// console.log("Preorder");
// bst.preorder(root)
// console.log("\n");

// console.log("Inorder");
// bst.inorder(root)
// console.log("\n");

// console.log("Postorder");
// bst.postorder(root)
// console.log("\n");

var search1 = bst.search(root, 10) ? "Found" : "Not found"
console.log(search1);
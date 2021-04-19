class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }    
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
//tree.root.right = new Node(15);
//tree.root.let = new Node(7);
//tree.root.left.left = new Node(9);
// .       5
// .   2         13
//            11    16
//
//           7
//
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)


var lowestCommonAncestor = function(root, p, q) {
    if (root.value > p.value && root.value > q.value) {
        return lowestCommonAncestor(root.left, p, q);
    }
    else if (root.value < p.value && root.value < q.value) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else {
        return root;
    }
}


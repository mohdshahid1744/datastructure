class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class binarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }

    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left ===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else {
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
    }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    InOrder(root){
        if(root){
            this.InOrder(root.left)
            console.log(root.value);
            this.InOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.right && !root.left){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
   
findPath(target)
    {
        let path=[]
        let cur=this.root
        while(cur){
            path.push(cur.value)
            if(target==cur.value)
            {
                path.pop()
                return path
            }
            if(target<cur.value)
            {
                cur=cur.left
            }
            else{
                cur=cur.right
            }
            
        }
    }
  
    ancestor(node1,node2){
        let path1=this.findPath(node1)
        let path2=this.findPath(node2)
        if(!path1 || !path2){
            return null
        }
        let common=0
        for(let i=0;i<path1.length;i++)
        {
            if(path1[i]==path2[i])
            {
                common=path1[i]
       }else{
                break;
            }
        }
        return common
    }
    closest(root,value)
    {
        let closest=root.value
        while(root){
            if(Math.abs(root.value-value)<Math.abs(closest-value))
            {
                closest=root.value
            }
            else if(value<root.value){
                root=root.left
            }else{
                root=root.right
            }
        }
        return closest
    }
    height(root) {
        if (root == null) {
            return 0
        }
        let left = this.height(root.left)
        let right = this.height(root.right)
        return Math.max(left, right) + 1
    }
  }
  

const bst=new binarySearchTree()
console.log("Tree is empty?:",bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(1)
bst.preOrder(bst.root)
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,5));
console.log(bst.search(bst.root,12));
console.log(bst.search(bst.root,20));

console.log("ASFD",bst.findPath(1));
console.log("Ancestor",bst.ancestor(1,7));
console.log("closest:",bst.closest(bst.root,9));
console.log("Height:",bst.height(bst.root));
bst.levelOrder()
console.log("min value",bst.min(bst.root));
console.log("max value",bst.max(bst.root));
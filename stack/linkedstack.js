
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedListStack {
    constructor() {
        this.top = null; 
        this.size = 0;   
    }

    push(data) {
        const newNode = new Node(data);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }
    pop() {
        if (!this.top) {
            return null; 
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.data;
    }
    findMiddle(){
        let slow=this.top;
        let fast=this.top;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow.data;
    }

    peek() {
        return this.top ? this.top.data : null;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    print() {
        let current = this.top;
    
        while (current) {
            console.log(current.data);
            current = current.next;
        }
        
    }
}


const stack = new LinkedListStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Stack contents:");
stack.print(); 

console.log("Popped element:", stack.pop()); 
console.log("Top element after pop:", stack.peek()); 
console.log("Stack size:", stack.getSize()); 
console.log("middle:",stack.findMiddle());
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0; 
    }
    enqueue(data) {
        const newNode = new Node(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
    dequeue() {
        if (!this.front) {
            return null;
        } else {
            const removedNode = this.front;
            this.front = this.front.next;
            if (!this.front) {
                this.rear = null;
            }
            this.size--;
            return removedNode.data;
        }
    }
    peek() {
        return this.front ? this.front.data : null;
    }
    findMiddle(){
        let slow=this.front;
        let fast=this.front;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow.data;
    }

    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    print() {
        let current = this.front;
       
        while (current) {
            console.log(current.data);
            current = current.next;
        }
       
    }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log("Queue:");
queue.print(); 
// console.log("Dequeue:", queue.dequeue());
// console.log("Front:", queue.peek());
console.log("Queue:");
queue.print();
console.log("Middle:",queue.findMiddle());

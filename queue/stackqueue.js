class stackQueue{
    constructor(){
        this.stack1=[];
        this.stack2=[];
    }
    enqueue(element){
        this.stack1.push(element)
    }
    dequeue(){
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
                
            }
        }
        if(this.stack2.length===0){
            return 'underflow'
        }
        return this.stack2.pop()
    }
    print(){
        
        console.log(this.stack1);
    }
}
const queue = new stackQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print()
console.log(queue.dequeue()); 

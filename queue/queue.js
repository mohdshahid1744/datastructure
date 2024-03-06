class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        return this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length===0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null;
    }
    size(){
        return this.items.length;
    }
    sort() {
        const tempQueue = new Queue();

        while (!this.isEmpty()) {
            let min = this.items[0];
            let minIndex = 0;

            for (let i = 1; i < this.size(); i++) {
                if (this.items[i] < min) {
                    min = this.items[i];
                    minIndex = i;
                }
            }

            for (let i = 0; i < this.size(); i++) {
                if (i !== minIndex) {
                    this.enqueue(this.dequeue());
                } else {
                    tempQueue.enqueue(this.dequeue());
                }
            }
        }

        while (!tempQueue.isEmpty()) {
            this.enqueue(tempQueue.dequeue());
        }
    }

    minvalue(){
        if(this.isEmpty()){
            return null
        }
        let min=this.items[0]
        for(let i=1;i<this.size();i++){
            if(this.items[i]<min){
                min=this.items[i]
            }
        }
        return min;
    }
    print(){
        console.log(this.items.toString());
    }
}



const myQueue=new Queue();
myQueue.enqueue(5)
myQueue.enqueue(20)
myQueue.enqueue(15)
myQueue.enqueue(2)
myQueue.print()
console.log("Original queue:");
myQueue.print();

myQueue.sort();

console.log("Sorted queue:");
myQueue.print();
console.log("min:",myQueue.minvalue());
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
myQueue.print()



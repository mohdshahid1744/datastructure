class Stack{
    constructor(){
        this.stack=[];
        this.minstack=[];
    }
    push(val){
        this.stack.push(val);
        if(this.minstack.length===0||val<=this.getMin()){
            this.minstack.push(val)
        }
    }
    pop(){
        let popped=this.stack.pop()
        if(popped===this.getMin()){
            this.minstack.pop()
        }
        return popped
    }
    getMin(){
        return this.minstack[this.minstack.length-1]
    }
    print(){
        console.log(this.stack);
    }
}

const stack=new Stack()
stack.push(5)
stack.push(15)
stack.push(2)
stack.push(35)
stack.push(45)
stack.print()
console.log(stack.getMin());
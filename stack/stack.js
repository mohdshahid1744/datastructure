class Stack{
   constructor(){
    this.item=[]
   } 
   push(element){
    this.item.push(element)
   }
   pop(){
    if(this.item.length===0){
        return 'The stack is empty'
    }
    return this.item.pop()
   }
   isEmpty() {
    return this.item.length === 0;
}
sort() {
    const tempStack = new Stack();

    while (!this.isEmpty()) {
        const temp = this.pop();

        while (!tempStack.isEmpty() && tempStack.peek() < temp) {
            this.push(tempStack.pop());
        }

        tempStack.push(temp);
    }
    while (!tempStack.isEmpty()) {
        this.push(tempStack.pop());
        
    }
}
peek() {
    return this.item[this.item.length - 1] 
}
   print(){
    console.log(this.item);
   }
}
function valid(s){
    const stack=new Stack();
    let pairs={
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for(let char of s){
        if(char==='('||char==='['||char==='{'){
            stack.push(char)
        }else{
            let top=stack.pop();
            if(top !==pairs[char]){
                return false;
            }
        }
    }
    return stack.isEmpty()
}


function paliandrom(input){
    const stack=new Stack()
    for(let char of input){
        stack.push(char)
    }

    for(let char of input){
        if(char!==stack.pop()){
            return false
        }
    }
return true
}

const myStack=new Stack()
myStack.push(5);
myStack.push(25);
myStack.push(15);
myStack.push(10);
myStack.print()
console.log(myStack.peek());
console.log(myStack.pop());
myStack.print()
console.log(valid("()"));
console.log(valid("(){]"));
console.log(paliandrom("shahid"));
console.log("Original stack:");
myStack.print();

myStack.sort();

console.log("Sorted stack:");
myStack.print();
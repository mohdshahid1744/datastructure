class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
    }
}

function reverseStack(stack) {
    const reverseStack = new Stack();
    while (!stack.isEmpty()) {
        reverseStack.push(stack.pop());
    }

    return reverseStack;
}

const originalStack = new Stack();
originalStack.push(1);
originalStack.push(2);
originalStack.push(3);
originalStack.push(4);

console.log("Original stack:");
originalStack.print(); 

const reversedStack = reverseStack(originalStack);

console.log("Reversed stack:");
reversedStack.print();

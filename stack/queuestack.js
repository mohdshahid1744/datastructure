class queuestack{
    constructor(){
        this.q1=[]
        this.q2=[]
    }

    push(value){
        this.q1.push(value)

        while(this.q2.length>0){
            this.q1.push(this.q2.shift())
        }

        [this.q1,this.q2]=[this.q2,this.q1]
    }

    pop(){
        if(this.q2.length==0){
            return null
        }
        this.q2.shift()
    }

    display(){
        console.log(this.q2)
    }
}

const stack= new queuestack

stack.push(1)
stack.push(4)
stack.push(3)
stack.push(4)
stack.push(5)
stack.pop()
stack.display()
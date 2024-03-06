
class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    prepend(value){
        const node=new Node(value);
        if(this.head===null){
            this.head=node;
            this.tail=node
        }else{
        node.next=this.head;
        this.head=node
        }
    }
    append(value){
        const node=new Node(value);
        if(this.head===null){
            this.head=node;
            this.tail=node
        }
       this.tail.next=node;
       this.tail=node

    }
    insert(value,target){
        const node=new Node(value)
        if(this.head.value===target){
            return this.prepend(value)
        }
        let curr=this.head;
        while(curr.next&&curr.next.value!==target){
            curr=curr.next
        }
        if(curr.next){
            node.next=curr.next;
            curr.next=node
        }
    }
    removeDuplicates(){
        const uniqueSet=new Set()
        let curr=this.head
        let prev=null
        while(curr){
            if(uniqueSet.has(curr.value)){
                prev.next=curr.next
            }else{
                uniqueSet.add(curr.value)
                prev=curr
            }
            curr=curr.next
        }
    }
    isPaliandrom(){
        let slow=this.head;
        let fast=this.head;
        let prev=null;
        while(fast&&fast.next){
            fast=fast.next.next
            let next=slow.next
            slow.next=prev;
            prev=slow;
            slow=next
            
        }
        if(fast){
            slow=slow.next
        }
        while(slow){
            if(prev.value!==slow.value){
               console.log("false");
               return
            }
                slow=slow.next;
                prev=prev.next;
      
            }
            console.log("true");
    }
    search(value){
     
            let i=0
            let curr=this.head;
            while(curr){
                if(curr.value===value){
                    return i;
                }
                curr=curr.next;
                i++;
            }
            return -1
        
    }
    print(){
        if(this.head===null){
            console.log("list is empty");
        }
        let curr=this.head;
        while(curr){
            console.log(curr.value);
            curr=curr.next
        }
       
    }
}
const list=new linkedList()
list.append(10)
list.append(20)
list.append(20)
list.append(30)
list.search(30)
list.print()

console.log("searched value's index:",list.search(30));





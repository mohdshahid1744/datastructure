class MinHeap {
    constructor() {
      this.heap = [];
      
    }
  
    buildHeap(arr) {
      this.heap = arr;
      for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
        this.shiftDown(i);
      }
    }
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
   leftChild(i) {
      return 2 * i + 1;
    }
  
    rightChild(i) {
      return 2 * i + 2;
    }
    swap(a, i, j) {
      [a[i],a[j]]=[a[j],a[i]]
    }
  
    shiftDown(currentIndex) {
      let endIndex = this.heap.length - 1;
      let leftIndex = this.leftChild(currentIndex);
  
      while (leftIndex <= endIndex) {
        let rightIndex = this.rightChild(currentIndex);
        let indexToShift;
  
        if (rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex]) {
          indexToShift = rightIndex;
        } else {
          indexToShift = leftIndex;
        }
  
        if (this.heap[currentIndex] > this.heap[indexToShift]) {
          this.swap(this.heap, currentIndex, indexToShift);
          currentIndex = indexToShift;
          leftIndex = this.leftChild(currentIndex);
        } else {
          return;
        }
      }
    }
    
  
    shiftUp(currentIndex) {
      let parentIndex = this.parent(currentIndex);
      while (currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
        this.swap(this.heap, currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(currentIndex);
      }
    }
  
    peek() {
      return this.heap[0];
    }
  
    remove() {
      this.swap(this.heap, 0, this.heap.length - 1);
      this.heap.pop();
      this.shiftDown(0);
    }
  
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
  
   
  
 
  
   
    display() {
      console.log(this.heap);
    }
  }
  
  function heapSort(m) {
    let sorted = [];
    while (m.heap.length) {
      let min = m.peek();
      sorted.push(min)
      m.remove();
    }
    return sorted;
  }
  
  
let m = new MinHeap();
m.insert(2)
m.insert(4)
m.insert(5)
m.insert(6)
m.insert(7)
m.insert(8)
m.insert(10)
m.display()
m.remove()
m.buildHeap(m.heap)

m.display()
let sortedArray = heapSort(m);
console.log(sortedArray);

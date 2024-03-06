

function minHeap(arr){
    for(var i=Math.floor(arr.length/2)-1;i>=0;i--){
        minHeapSort(arr,arr.length,i)
    }


    function minHeapSort(arr,n,i){
        let smallest=i
        let left=2*i+1
        let right=2*i+2

        if(left < n && arr[left] < arr[smallest]){
            smallest=left
        }

        if(right < n && arr[right] < arr[smallest]){
            smallest=right
        }
            if(smallest !== i){
                [arr[smallest],arr[i]]=[arr[i],arr[smallest]]
                minHeapSort(arr,n,smallest)
            }
        
    }
        for (let i = arr.length - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            minHeapSort(arr, i, 0);
        }
        return arr;
            }
let number=[2,1,5,6,8,3,9]
let res=minHeap(number)
console.log(res);

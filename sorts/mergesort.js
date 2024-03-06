function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    const mid=Math.floor(arr.length/2);
    const leftarr=arr.slice(0,mid);
    const rightarr=arr.slice(mid);
    return merge(mergeSort(leftarr),mergeSort(rightarr))
}

function merge(leftarr,rightarr){
    const sortArr=[];
    while(leftarr.length && rightarr.length){
        if(leftarr[0]<=rightarr[0]){
            sortArr.push(leftarr.shift())
        }else{
            sortArr.push(rightarr.shift())
        }
    }
    return [...sortArr,...leftarr,...rightarr]
}
let arr=[8,6,2,4-8,3,4]
console.log(mergeSort(arr));
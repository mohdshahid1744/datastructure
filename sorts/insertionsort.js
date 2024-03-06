

// for(i=0;i<arr.length;i++)
// {
//     let j=i
//     while(j>0&&arr[j]<arr[j-1])
//     {
//         let temp=arr[j-1]
//         arr[j-1]=arr[j]
//         arr[j]=temp
//         j--
//     }
// }


function insertion(arr){
    for(let i=0;i<arr.length;i++){
        let j=i
        while(j>0 && arr[j-1]>arr[j]){
            let temp=arr[j-1];
            arr[j-1]=arr[j];
            arr[j]=temp;
            j--;
        }
    }
}
let arr=[2,3,2,1,9,4,7,6,9,7]
insertion(arr)
console.log(arr);
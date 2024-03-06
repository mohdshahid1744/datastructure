let arr=[2,1001,8,5,6,1001]
for(i=0;i<arr.length;i++)
{
    let min=i
    for(j=i;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            min=j
           
        }
    }
    let temp=arr[min]
    arr[min]=arr[i]
    arr[i]=temp
}
console.log(arr);
function power(x,n){
    if(n===0){
        return 1
    }else{
    return x*power(x,n-1)
    }
}

console.log(power(2,3));

////////////////////////////////////////////////

let str="malayalam"

function reverse(str,i){
    if(i===str.length){
        return ""
    }else{
        return reverse(str,i+1)+str[i]
    }

}
let result=reverse(str,0)
if(result===str){
    console.log("its paliandrom");
}else{
console.log("its not");
}
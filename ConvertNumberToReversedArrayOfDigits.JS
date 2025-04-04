function digitize(n) {
    let i=0
    let arr=[]    
if(n<10){
arr[0]=n
}
while(n>0){
arr[i] = n %10
n = parseInt(n / 10)
i++
}

return arr


}

console.log(digitize(0))
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr(n,s){
    let str=''
for(let i=0;i<n;i++){
    str+=s
}


return str
}
console.log(repeatStr(2,'hello'))
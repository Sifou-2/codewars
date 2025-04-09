// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
function sumArray(arr){
    if (arr == null || arr.length <= 2) return 0
if(arr == null) return 0

let min=arr[0]
let max=arr[0]
let sum=0
for(let i=0;i<arr.length;i++){
if(max<arr[i]){max=arr[i]}
if(min>arr[i]){max=arr[i]}
sum+=arr[i]
}
sum=sum-min-max
return sum
}


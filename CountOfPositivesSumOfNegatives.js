// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
let arrayofpositives=[]
let sum=0
for(let i=0;i<input.length;i++){
    if(input[i]>0){ arrayofpositives.push(input[i])}
    else {sum+=input[i]}
}

return[arrayofpositives.length,sum]


}

// // Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:


function findeNeedle(array){
for(let i=0;i<array.length;i++){
if(array[i]=='needle')
return "found the needle at position "+i


}

}

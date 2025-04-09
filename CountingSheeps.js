// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
sheep=[null,true,true,null,true,false]
function countSheep(sheep){

    let counter =0
    for(let i=0;i<sheep.length;i++){
        if(sheep[i] == true ){
            counter++
        }
       
    }


return counter
}

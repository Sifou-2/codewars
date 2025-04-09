// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2){
let r=0
    switch(operation){
case '+':
    r=value1+value2
break;
case '-':
    r=value1-value2
break;
case '/':
    r=value1/value2
break;
case '*':
    r=value1*value2

}


return r



  }



function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
var primerizer = function(input){
    var factors = [];
    var numStorage = input;
    x=2;
    while (numStorage != 1){
        var result = numStorage%x;
        if (result === 0) {
            factors.push(x);
            numStorage = numStorage/x
            x=2;
        }
        else {
            x = x+1;
        }
    }
    return factors.pop();
}
document.write(primerizer(50)
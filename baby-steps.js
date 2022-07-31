arry = process.argv;
var index = 2 ;
var sum = 0 ;
while (index < arry.length) {
    sum += parseInt (arry[index]) ;
    index += 1 ; 
}

console.log(sum) ;




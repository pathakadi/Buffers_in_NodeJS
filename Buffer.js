const buffer = new Buffer.from("Aditya") ;

// Output is String.(in this case "Aditya")
console.log(buffer.toString()) ;

// Output is type and the buffer in form of Decimal Number System.
console.log(buffer.toJSON()) ;

// Output is in the form of Hexadecimal Number System.
console.log(buffer) ;

// Interchanging the buffer
// if n(no. of digit) <= 6 , then first n digit will get changed.
buffer.write("aDI") ;
console.log(buffer.toString()) ;
console.log(buffer.toJSON()) ;
console.log(buffer) ;

// if n(no. of digit) > 6 , then first 6 digit will get changed.
buffer.write("AdarshPathak") ;
console.log(buffer.toString()) ;
console.log(buffer.toJSON()) ;
console.log(buffer) ;
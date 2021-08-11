
// 2. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 


//1. Pasniedzejs
// function isPrime(val){
//     if (val <= 1)
//         return false;
//     for (let i=2; i< val ; i++){
//         if(val%i===0)
//         return false; 
         
// }
// return true
// }

// for (let i = 0; i<100; i++){
//     console.info(i, isPrime(i));
// }

//2.Can you please explain me, why this function doesn’t work, if I write there a variable “prime”?
//  Then I get that all numbers are true.

// function isPrime(val){
//     let prime;
//     if (val <= 1)
//         prime = false;
//     for (let i=2; i< val ; i++){
//         if(val%i===0)
//         prime = false; 
         
// }
// prime = true;
// return prime
// }

// for (let i = 0; i<100; i++){
//     console.info(i, isPrime(i));
// }

//3. And when I write “prime = true” here, then I get that 0 and 1 is false,
// 2 is undefined, but all other numbers are true.

// function isPrime(val){
//     let prime;
//     if (val <= 1)
//         prime = false;
//     for (let i=2; i< val ; i++){
//         if(val%i===0)
//         prime = false; 
//          else
//          prime = true;       
         
// }

// return prime
// }

// for (let i = 0; i<100; i++){
//     console.info(i, isPrime(i));
// }

//4.My homwork

// function isPrime(number){
//     let prime = true
//     if (number > 1 && typeof(number==Number)){
//         for(let i=2; i < number; i++){
//             if (number % i == 0){
//             prime = false
//             break
//             }
//         }
//     }
    
//     if (prime){
//         alert(number + " is prime");
//     }else{
//         alert(number + " is not prime")
//     }
//     return prime; //šo vajag vai nē?
// }
    
// isPrime(33);

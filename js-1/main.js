// Task 1
// const a = +prompt("please enter the value of A:")
// const b = +prompt("please enter the value of B:")
//   let result1 = a/b
//   let result2 = a % b;
//   console.log("Result:" + result1)
//   console.log("Remainder :" + result2)


//Task 2
// const a = +prompt("please enter the value of A:")
// const b = +prompt("please enter the value of B:")
// b==a
// a==b
// console.log("A:"+ b)
// console.log("B:"+ a)



//Task 3
// const a = +prompt("please enter the value of A:")
// const b = +prompt("please enter the value of B:")
// const c = +prompt("please enter the value of C:")
// if(a==0 && b==0 && c==0){
//     console.log("please enter true number")
// }
// else{
//     let x =(c-b)/a
//     console.log("X:"+ x)
// }


//Task 4
// const a = +prompt("please enter the value of A:")
// const b = +prompt("please enter the value of B:")
// let result ='';
// if(a>b){
//      result = a+b
// }
// else if(a==b){
//    result =a*b
// }
// else {
//     result= a-b
// }
// console.log("Result:" + result)


//Task 5 
// const a = +prompt("please enter the value of A:")
// const b = +prompt("please enter the value of B:")
// const c = +prompt("please enter the value of C:")
// let discriminant = b*b - 4*a*c
// let x1 = '';
// let x2 = '';
// if(discriminant>0){
// x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
// x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
// console.log("X1:"+x1+"\n"+"X2:"+x2)
// }
// else if(discriminant==0){
//     x1=x2=-b / (2 * a);
//     console.log("X:"+x1)
// }
// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
//     console.log( `X1:${realPart} + ${imagPart}i \n  X2:${realPart} - ${imagPart}i`);
// }

//Task 6
// const a = +prompt("please enter the value of A:")
// var once = [' ','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
// var twos = [ ' ','Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
// var tens = [ ' ','Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
// let numLen = a.toString().length
// if (numLen>2){
//     console.log("Please enter two-digit number !")
// }
// else if (numLen==2 && a%10!=0 && a>=20){
//     let first =  Math.floor(a/10);
//     let second = a%10
//     console.log(tens[first]+" "+once[second])
// }
// else if (a>10 && a<20){
// let x = a%10
// console.log(twos[x])
// }
// else if (a%10==0){
//     let x =a/10
//     console.log(tens[x])
// }
// else {
//     console.log(once[a])
// }


// //Task7
// const x = +prompt("please enter the value of X:")
// const y = +prompt("please enter the value of Y :")
// const r = +prompt("please enter the value of R:")
// console.log(`X:${x}\nY:${y}\nR:${r}`)
// let point = x*x + y*y
// if(point<r*r){
//     console.log("(x,y) is inside a circle ")
// }
// else{
//     console.log("(x,y) is not inside a circle ")
// }
// Task 1\
// function dividenumbers(){
//   const a = +prompt("please enter the value of A:")
//   const b = +prompt("please enter the value of B:")
//   let result1 = a/b
//   let result2 = a % b;
//   console.log("Result:" + result1)
//   console.log("nextresult :" + result2)

// }
// dividenumbers();

// Task 2
// function swapnum() {
//     const a = +prompt("please enter the value of A:")
//     const b = +prompt("please enter the value of B:")
//     b==a
//     a==b
//     console.log("A:"+ b)
//     console.log("B:"+ a)
// }
// swapnum();


// Task 3
// function linear(){
//     const a = +prompt("please enter the value of A:")
//     const b = +prompt("please enter the value of B:")
//     const c = +prompt("please enter the value of C:")
//     if(a==0 && b==0 && c==0){
//         console.log("please enter true number")
//     }
//     else{
//         let k =(c-b)/a
//         console.log("K:"+ k)
//     }
// }
// linear();
// Task 4
// function resultfnc(){
//     const a = +prompt("please enter the value of A:")
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

// }
// resultfnc();
// Task 5 
// function quadraticEquation(){
//     let a = +prompt("Enter A: ");
//     let b = +prompt("Enter B: ");
//     let c = +prompt("Enter C: ");
//     let discriminant = b * b - 4 * a * c;
//     let root1;
//     let root2;
//     if (discriminant > 0) {
//       root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//       root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//       console.log(`The roots are ${root1} and ${root2}`);
//     } else if (discriminant == 0) {
//       root1 = root2 = -b / (2 * a);
//       console.log(`The root is ${root1}`);
//     } else {
//       console.log(`The roots are real`);
//     }
// }
// quadraticEquation();

//Task7
function radius();{
    const x = +prompt("please enter the value of X:")
    const y = +prompt("please enter the value of Y :")
    const r = +prompt("please enter the value of R:")
    console.log(`X:${x}\nY:${y}\nR:${r}`)
    let point = x*x + y*y
    if(point<r*r){
        console.log("(x,y) is inside a circle ")
    }
    else{
        console.log("(x,y) is not inside a circle ")
    }
}
radius();


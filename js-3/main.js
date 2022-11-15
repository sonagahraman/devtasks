//Task 1
// const arr = [8,12,-4,6,13]
// let min = arr[0]
// for(let i=0 ;i<arr.length;i++){
//     if(arr[i]<=min){
//         min=arr[i]
//     }
// }
// console.log(`Array:${arr}\nMin:${min}`)


//Task 2
// const arr = [8,12,-4,6,13]
// let max = arr[0]
// for(let i=0 ;i<arr.length;i++){
//     if(arr[i]>=max){
//         max=arr[i]
//     }
// }
// console.log(`Array:${arr}\nMax:${max}`)


//Task 3
// const arr = [8,12,-4,6,13]
//     let min = arr[0]
//     let index
//     for(let i=0 ;i<arr.length;i++){
//         if(arr[i]<=min){
//             index=i
//         }
//     }
// console.log(`Array:${arr}\nMinimum index:${index}`)


//Task 4
// const arr = [8,12,-4,6,13]
// let max = arr[0]
// let index
// for(let i=0 ;i<arr.length;i++){
//     if(arr[i]>=max){
//         index=i
//     }
// }
// console.log(`Array:${arr}\nMaximum index:${index}`)


//Task 5
// const arr = [8,12,-4,6,13]
// sum=0
// for(let i=0 ; i<arr.length; i++)
// {
//     if(i%2==1)
//     {
//         sum+=arr[i]
//     }
// }
// console.log(`Array:${arr}\nSum:${sum}`)


//Task 6
// const arr = [8,12,-4,6,13]
// console.log(`First array:${arr}`)
// let y
// let n
// if(arr.length%2==1){
//     n=(arr.length-1)/2+1
// }
// else{
//     n=arr.length/2
// }
// for(let i =0 ; i<n ; i++)
// {
// y=arr[i]
// arr[i]=arr[arr.length-i-1]
// arr[arr.length-i-1]=y
// }
// console.log(`Reversing array:${arr}`)

//Task 7
// const arr = [8,12,-4,6,13]
// let count =0
// for(let i= 0; i<arr.length;i++){
//     if(arr[i]%2==1 || arr[i]%2==-1){
//         count++
//     }
// }
// console.log(`Array:${arr}\nOdd number count:${count}`)

//Task 8

//Task 9
// const arr = [8,12,-4,6,13]
// console.log(`First array:${arr}`)
// let t=1
// for(let i=1; i<arr.length ;i++){
//   let n =i
//   for(let x=i-1;x>=0;x--){
//     if(arr[n]<arr[x])
//     {
//       let y= arr[n]
//       arr[n]=arr[n-1]
//       arr[n-1]=y
//       console.log(`     //Step${t}:  ${arr}`)
//       t++
//     }
//     m--
//   }

// }
// console.log(`Sorting array:${arr}`)


//Task 10
// const arr = [8,12,-4,6,13]
// console.log(`First array:${arr}`)
// let x=0
// let t=1
// while(x<=arr.length-1){
//     let n= 1
//     for(let i = 0;i<arr.length-x;i++){
//         if(arr[i]<arr[i+1]){
//           let y = arr[i]
//           arr[i]=arr[i+1]
//           arr[i+1]=y
//         }
//         console.log(`     //Step ${t}.${n}:  ${arr}`)
//         n++
//       }
//       x++
//       t++
// }
// console.log(`Sorting array:${arr}`)
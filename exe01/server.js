const numbers =[1,2,3,4,5,6,7,8,9]
// function dblNumber(arr)
// { 
//     const arrDbl =[]
//     for(i=0,length=arr.length;i<length;i++){
//         arrDbl.push(arr[i]*2)
       
//     }
//    return arrDbl
// }
// function dblNumber(arr){
//     return arr.map(item=>item*2)
// }
// console.log(dblNumber(numbers))
// console.log(numbers.reduce((prev,current)=>{
//     return prev+current
// },0))
console.log(numbers.filter(item =>item%2===0))

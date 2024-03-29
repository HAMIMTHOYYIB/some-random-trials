// return each row of a odd Triangle.
function oddRow(n) {
    let arr =[]
    let count = -1
    for(let i=1; i<=n; i++){
      let ar1 = []
      for(let j=1; j<=i; j++){
        count +=2
        ar1.push(count)
      }
      arr.push(ar1);
    }
    return arr
}
// console.log(oddRow(10));



// another question.  in an array make of intigers change the elements which are 0 to the last and all other value as in the order without sorting
function lastZero (Arr){
    let a =[];
    let b =[];
    for(let i=0; i<Arr.length; i++){
        if(Arr[i] === 0){
            b.push(Arr[i])
        }else{
            a.push(Arr[i])
        }
    }
    return a.concat(b)
}
let arr = [0,1,0,3,12]
// console.log(lastZero(arr));


function highestVal(num) {
    let a = num.toString().split('').map(Number)
    console.log(a);
    let b = a.sort((a,b) => b-a);
    return b.join('');
}
let number = 1234567890656546 ;
// console.log(highestVal(number));


function tribonacci(arr,n) {
    let neww = arr
    for(let i=3; i<n ; i++){
        neww.push(neww[i-1]+neww[i-2]+neww[i-3]);
    }
    return neww;
}
let ar = [1,2,3]
console.log(tribonacci(ar,10));
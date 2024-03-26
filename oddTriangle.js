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
console.log(oddRow(10));

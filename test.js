let arr = [1,2,3,4,5]

let double = arr.map((val) => val*2)
console.log(double);

let oddnum = arr.filter((val) => !(val%2==0))
console.log(oddnum);

let sum = arr.reduce((tot,val) => tot+val,0)
console.log(sum);

arr.forEach((val) => val*3)

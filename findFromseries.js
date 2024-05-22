const a = [0,5,7,9,11,15,8,48,41,2,3,43,34,54,45,65,63,22,23,13,55,66];
// A function  to get  the element which are not in this series
 const func = (a) => {
    a.sort((a,b) => a-b);
    let f = a[0]
    let l = a[a.length-1];
    const arr = []
    for (let i=f; i<=l; i++){
        if(!a.includes(i)){
            arr.push(i)
        }
    }
    return arr;
 }

 console.log(func(a));
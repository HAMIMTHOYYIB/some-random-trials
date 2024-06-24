// let arr = [1,2,3,4,5]

// let double = arr.map((val) => val*2)
// console.log(double);

// let oddnum = arr.filter((val) => !(val%2==0))
// console.log(oddnum);

// let sum = arr.reduce((tot,val) => tot+val,0)
// console.log(sum);

// arr.forEach((val) => val*3)


function letterOcc(word) {
  let letters = word.split("");
  let arr = {};
  for (let i = 0; i < word.length; i++) {
    const char = letters[i]
    if (arr[char]) {
      arr[letters[i]]++
    } else {
        arr[letters[i]] = 1
    }
  }
  console.log("arrr : ", arr);
}


function removeChar(word){
    let regex = /[a-zA-Z]/;
    let letters = word.split("");
    let out  =  letters.filter(letter => regex.test(letter))
    console.log(out.join(''));
}
letterOcc("happy");

removeChar("@ha&mi%ms%$%$%$%$%$%$ -=Thoyy6Ib")

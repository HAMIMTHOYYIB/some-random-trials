// Creating a Promise

function sample(x) {
    return new Promise((resolve,reject) => {
        if (x%2==0) {
            setTimeout(() => {
                resolve("It is an Even Number")
            }, 3000);
        }else{
            reject("It is an Odd Numeber")
        }
    })    
}

sample(3)
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log("Sorry! ,",err);
});


// // Example function that returns a Promise
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = { message: "Data fetched successfully!" };
//         const isSuccess = true;
//         if (isSuccess) {
//           resolve(data); 
//         } else {
//           reject("Error: Unable to fetch data");
//         }
//       }, 3000);
//     });
//   }

//   fetchData()
//     .then((result) => {
//       console.log(result.message);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  


// function check(x) {
//     return new Promise((resolve,reject) =>{
//         if (x%2==0) {
//             resolve("The number is an even number")
//         }else{
//             reject("The Number is Not an Even Number")
//         }
//     })
// }

// check(5)
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log("An Error occured.",err);
// })
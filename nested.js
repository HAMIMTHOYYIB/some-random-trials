const nestedObject = {
    array1: [
      { name: "ObjectA", value: 10 },
      { name: "ObjectB", value: 20 },
      { name: "ObjectC", value: 30 },
    ],
    array2: [
      { title: "Item1", quantity: 5 },  
      { title: "Item2", quantity: 10 },
      { title: "Item3", quantity: 15 },
    ],
    array3: [
      { firstName: "John", lastName: "Doe", age: 25 },
      { firstName: "Jane", lastName: "Smith", age: 30 },
      { firstName: "Bob", lastName: "Johnson", age: 22 },
    ],
  };

  for (const key in nestedObject) {
    for (const iter of nestedObject[key]) {
        for (const val in iter) { 
            if (iter[val] == "Johnson") {
                iter[val] = "Hamim";

            }
        }
    }
  }
  console.log(nestedObject.array3);
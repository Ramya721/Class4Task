let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Convert JSON objects to strings and sort them
const sortedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
const sortedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

// Compare the sorted strings
if (sortedObj1 === sortedObj2) {
  console.log("The two JSON objects are equal.");
} else {
  console.log("The two JSON objects are not equal.");
}

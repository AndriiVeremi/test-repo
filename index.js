function countProps(object) {
  let propCount = 0;
  // Change code below this line
for (const key in object) {
 
  if (object.hasOwnProperty(key)) {
    // console.log(object[key])
    propCount += 1;
  }
  // console.log(propCount)
}
  // Change code above this line
  return propCount;
}


console.log(countProps({ name: "Mango", age: 2 }))
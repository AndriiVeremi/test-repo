function testGreaterThan(val) {
  if (val > 10) {
    // Змініть цей рядок
    return "Over 100";
  }

  if (val < 10) {
    // Змініть цей рядок
    return "Over 10";
  }

  return "10 or Under";
}



console.log(testGreaterThan(11)); //має повертати рядок 10 or Under

console.log(testGreaterThan(99)); // має повертати рядок Over 10

console.log(testGreaterThan(150)); //має повертати рядок Over 100

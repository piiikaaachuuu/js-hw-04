const lang = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];
let result = [];

for (let element of lang) {
  element = element.slice([2]);
  result.push(element);
}
console.log(result);

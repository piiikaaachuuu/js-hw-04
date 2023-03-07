const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const array3 = array1.concat(array2);
let result = Number([]);

for (let i = 0; i < array3.length; i += 1) {
  result += array3[i];
}
console.log(result);

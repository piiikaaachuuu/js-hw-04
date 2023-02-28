const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const result = [];

for (let i = 0; i < array1.length; i += 1) {
  result.push(array1[i] + array2[i]);
}
console.log(result);

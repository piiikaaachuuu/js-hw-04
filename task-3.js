let lang = ["Pyton", "C++", "C#", "PHP"];
let js = "Java Script";

if (lang !== js) {
  console.log(`Значення Java Script в списку немає, додаємо в масив`);
  lang.push("Java Script");
  console.log(lang);
}

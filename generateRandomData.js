/* generateRandomDate.js */

const { fake } = require("faker");

const fs = require("fs");
var faker = require("faker");

faker.locale = "vi";

var randomName = faker.name.findName();

const randomCategoryList = (n) => {
  //let category = {}
  const listOfCategory = [];
  for (let i = 0; i < n; i++) {
    const category = { id: "", title: "", author: "" };
    category.id = faker.random.uuid();
    category.title = faker.name.title();
    listOfCategory.push(category);
  }
  return listOfCategory;
};

//console.log("list of category: ", listOfCategory);

//IIFE

const data = { title: "thunguyen" };
(() => {
  const listOfCategory = randomCategoryList(5);
  console.log(listOfCategory);
  fs.writeFile("db.json", JSON.stringify(listOfCategory), () => {
    console.log("write data success");
  });
})();

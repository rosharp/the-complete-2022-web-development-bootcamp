//require the Mongoose package (after running >npm i mongoose in Hyper to install it)
const mongoose = require("mongoose");

//connect to MongoDB by specifying port to access MongoDB server
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/FruitsDB");
}

//create a SCHEMA that sets out the fields each document will have and their datatypes
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

//create a MODEL
const Fruit = new mongoose.model("Fruit", fruitSchema);

//create a DOCUMENT
const fruit = new Fruit({
  name: {
    type: String,
    required: [true, "No name specifed."],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: "Pretty solid as a fruit.",
});

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = new mongoose.model("Person", personSchema);

const pinapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit.",
});

//pinapple.save();

const lemon = new Fruit({
  name: "Lemon",
  score: 8,
  review: "Hard to eat, but very nice.",
});

lemon.save();

//const person = new Person({
//  name: "Amy",
//  age: 12,
//  favouriteFruit: pinapple,
//});

//person.save();

const person = new Person({
  name: "Victor",
  age: 32,
  favouriteFruit: lemon,
});

person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best.",
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Sour.",
});

const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Wierd.",
});

//Fruit.insertMany([kiwi, orange, banana], function (err) {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log("Successfully save all the fruits to fruitsDB.");
//  }
//});

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    setTimeout(function () {
      mongoose.connection.close();
    }, 10);

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

//Fruit.updateOne(
//  { _id: "61dfae57b2ccd975f4874430" },
//  { name: "Peach" },
//  function (err) {
//    if (err) {
//      console.log(err);
//    } else {
//      console.log("Succesfully updated.");
//    }
//  }
//);
//
//Fruit.deleteOne({ name: "Peach" }, function (err) {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log("Successfully deleted the document.");
//  }
//});
//
//Person.deleteMany({ name: "Victor" }, function (err) {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log("Successfully deleted all Victors.");
//  }
//});

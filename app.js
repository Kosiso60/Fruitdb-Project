const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String,
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
})

const personSchema = new mongoose.Schema ({
    name : String,
    age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    age: 37
})
person.save();

const kiwi = new Fruit({
    name: "Banana",
    score : 3,
    review: "Weird texture"
})

const orange = new Fruit({
    name : "Orange",
    score: 4,
    review: "It is sweet"
})

const banana = new Fruit({
    name : "banana",
    score: 5,
    review: "Too soft"
})
// Fruit.insertMany([kiwi, orange, banana] ,function(err){
// if (err) {
//     console.log(err)
// }else{
//     console.log("Successfully saved all the fruits to fruitsDB")
// }
// })

Fruit.find(function(err, fruits){
    if(err){
        console.log(err)
    }
    else{
        console.log(fruits)
    }
})


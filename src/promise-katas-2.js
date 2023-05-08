const { fetch } = require("./fakeApi");
/* 

DO NOT change the import or names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

You can look at the fakeApi.js file to see the shape of the data that is returned from our fakeApi

We have imitated the fetch module for these katas. The fetch function takes two parameters, url and requestBody. 

For the first 3 exercises you will only need to provide the first parameter, url. For the last exercise you will
need to use the second parameter, requestBody.

An example of using the fetch function:

1 parameter
fetch("food").then(<insert your callback function>)

2 parameters
fetch("joke", "question").then(<insert your callback function>)

*/

// 1 Create a function that uses the fetch function to make a request to the "food" URL and returns
// the data - expected return value "Cheese" of type String

// THIS does work but uses the .then
/* const food = async () => {
  return await fetch("food")
    .then(
      value => { return value.data; }
    );
}; */

//THIS works but does not use the .then
const food = async () => {
   const { data } = await fetch("food");
   return data;
 };


// 2 Create a function that uses the fetch function to make a request to the "cats" URL and returns
// a list of cats in alphabetical order - expected return value ["Bandit", "Berry", "Puss in boots", "Smokey"] of type Array

const cat = async () => {
  const promise = await fetch("cats");
  console.log(promise.data);

   return promise.data.cats.sort();
  };
  /* const cat = async () => {
    const { data } = await fetch("cats");
    console.log(data);

   return data.cats.sort();
  }; */

// 3 Create a function that uses the fetch function to make a request to the "dogs" URL and returns
// the naughtiest dog - expected return value {name: "Mutley", naughty: 10} of type Object

const dog = async () => {
const { data } = await fetch("dogs");
console.log(data);

const naughtiestDog = data.dogs.reduce( (acc, curr) => acc.naughty > curr.naughty ? acc : curr);
  console.log("Naughty Doggy", naughtiestDog);
  return(naughtiestDog);
};

// 4 Create a function that uses the fetch function to make requests to the "jokes" URL and returns
// a joke object with the key of question and answer - expected return {
//     question: "Why did the scarecrow win the Nobel Prize?",
//     answer: "Because he was out-standing in his field."
// } of type Object
// You will have to make more than one request to our fakeApi to get all the data you need.
// Be aware of nesting your calls (try to avoid callback hell). Take a look at Promise.all on MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
//

const joke = async () => {
  try {
  const { joke } = await fetch("jokes", "question");
  const { answer } = await fetch("jokes");
  console.log(joke, answer);
  return {
    "question": joke,
    "answer": answer
  }
}
    catch(data) {
    console.log(data);
    }
  };

module.exports = {
  food,
  cat,
  dog,
  joke,
};
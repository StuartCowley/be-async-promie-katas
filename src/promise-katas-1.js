const returnPromise = () => {
  return new Promise((resolve, reject) => {
    resolve("Good morning!");
  });
}

const returnTen = () => {
  return new Promise((resolve, reject) => {
    resolve(10);
  });
 };

const returnString = () => {
  return new Promise((resolve, reject) => {
    resolve("string");
  });
 };

const returnBob = () => { 
  return new Promise((resolve, reject) => {
    resolve({ name: "Bob" });
  });
};

const returnList = () => { 
  return new Promise((resolve, reject) => {
    resolve(["eggs", "apples", "milk", "bread"]);
  });
};

const anError = () => { 
  return new Promise((resolve, reject) => {
    reject("An error occurred");
  });
};

const theNumberOfTheBeast = () => { 
  return new Promise((resolve, reject) => {
    reject(666);
  });
};

const internalServerError = () => { 
  return new Promise((resolve, reject) => {
    reject( {error: 500 });
  });
};

const happySad = (x) => { 
  return new Promise((resolve, reject) => {
    if (x >= 1) resolve("happy");
    else reject("sad");
  });
};

const amIYourFather = (x) => {
  return new Promise((resolve, reject) => {
    if (x === "Luke") resolve("Yes. Luke, I am your father.");
    else reject("Not your dad.");
  });
 };

const myNameIs = () => { 
  return new Promise ((resolve, reject) => {
    resolve(hereIsMyName = (name) => {
      return `My name is ${name}`;
    });
  });
};


module.exports = {
  returnPromise,
  returnTen,
  returnString,
  returnBob,
  returnList,
  anError,
  theNumberOfTheBeast,
  internalServerError,
  happySad,
  amIYourFather,
  myNameIs,
};
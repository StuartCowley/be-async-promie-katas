const { fetch } = require("./fakeApi");

const food = () => {
  return fetch("food")
  .then((response) => {
    return response.data;
  });
};

const cat = () => {
  return fetch("cats")
  .then((response) => {
    return response.data.cats.sort();
  });
};

const dog = () => {
  return fetch("dogs")
  .then((response) => {
    return  response.data.dogs.find(dog => {
      return dog.naughty === 10;
    });
  });
};

const joke = () => {
  return Promise.all([fetch("jokes", "question"), fetch("jokes")])
  .then((response) => {
    const [jokeQuestion, jokeAnswer] = response;
    const question = jokeQuestion.joke;
    const answer = jokeAnswer.answer;

    return {
      question,
      answer
    };
  });
}; 

  

module.exports = {
  food,
  cat,
  dog,
  joke,
};
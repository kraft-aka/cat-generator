const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
let responseData = [];

const btn = document.getElementById("generate-btn");
const cardEl = document.querySelector(".card");

const getRandomCat = async (url) => {
  const response = await fetch(URL);
  const data = await response.json();
  responseData = data;
  console.log(responseData);
};



getRandomCat()

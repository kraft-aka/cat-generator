const URL = "https://api.thecatapi.com/v1/images/search?limit=9";
let responseData = [];

const btn = document.getElementById("generate-btn");
const cardEl = document.querySelector(".card");

const getRandomCat = async (url) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    responseData = data;
    console.log(data);
    catCard(data);
  } catch (err) {
    console.log("Error occured: ", err);
  }
};

const catCard = (data) => {
  const card = data
    .map((cat) => `<img src=${cat.url} ${cat.width} ${cat.height}/>`)
    .join("");
  cardEl.innerHTML = card;
};

btn.addEventListener("click", getRandomCat);

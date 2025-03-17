function loadData() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayData(data.data));
}
//2
function loadCards() {
  fetch("https://openapi.programming-hero.com/api/level/5")
    .then((response) => response.json())
    .then((data) => displayCards(data.data));
}


function displayData(data) {
  //console.log(data);

  const dataContainer = document.getElementById('data-container');
  for (let dat of data) {
    //console.log(dat);

    const dataDiv = document.createElement("div");
    dataDiv.innerHTML = `
  <button onclick="red" class="btn bg-white border border-blue-500 hover:text-white hover:bg-blue-900"><img class="img" src="assets/fa-book-open.png"> 
  ${dat.lessonName} </button>
  `;

    dataContainer.append(dataDiv);
  }

}
//2
const displayCards = (data) => {
  //console.log(data);
  const cardContainer = document.getElementById("card-container");
  data.forEach(card => {
    console.log(card);
    const cardVideo = document.createElement("div");
    cardVideo.innerHTML =
     `
  <div class="card  bg-base-100 card-lg shadow-sm ">
  <div class="card-body">
    <div class="grid items-center justify-center">
    <h2 class="card-title">${card.word}</h2>
    <p>${card.meaning}</p>
    <p>${card.pronunciation}</p>
    </div>
    <div class=" card-actions flex justify-around">
      
     <img src="assets/Group 8.png" alt="">
      
      
      <img src="assets/Group 7.png" alt="">
      
    </div>
  </div>
</div>
  `
    cardContainer.append(cardVideo);
  })
}




loadCards();
loadData();


// button
document.getElementById('faq-btn').addEventListener('click', function () {
  document.getElementById('header-section').style.display = "block";
  document.getElementById('faq-section').style.display = "block";
  document.getElementById('banner-section').style.display = "none";
  document.getElementById('Voca-section').style.display = "none";
  document.getElementById('footer-section').style.display = "none";


});

document.getElementById('learn-btn').addEventListener('click', function () {
  document.getElementById('header-section').style.display = "block";
  document.getElementById('faq-section').style.display = "none";
  document.getElementById('banner-section').style.display = "none";
  document.getElementById('Voca-section').style.display = "block";
  document.getElementById('footer-section').style.display = "none";


});
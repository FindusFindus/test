var $ = require("jquery");

function renderMovie(movieData) {
    document.getElementById("movietitle").innerText = movieData.Title;
    document.getElementById("moviedescription").innerText = movieData.Description;
    document.getElementById("poster").setAttribute("src", movieData.Poster);
    //  document.getElementById("actors").innerHTML = movieData.Actors;
    let actorHtml = "";
    movieData.Actors.forEach(actor => {
        actorHtml = actorHtml + "<li>" + actor + "</li>";
        console.log(actorHtml)
    });
    document.getElementById("actors").innerHTML = actorHtml;
} 
let movieData = require("./data")   
renderMovie(movieData);

function changeStarRating(grade) {
    let currentlyFilledStars = document.querySelectorAll(".filledStar");
    currentlyFilledStars.forEach(element => {
        element.className = "emptyStar";
    });
    
    for (let index = 1; index <= grade; index++) {
        document.getElementById("star" + index).className = "filledStar";
    };
}

for (let index = 1; index <= 5; index++) {
    document.getElementById("star" + index).addEventListener("click", () => {
        changeStarRating(index);
    })      
};

// function hover(grade) {

// for (let index = 1; index <= 5; index++) {
//     document.getElementById("star" + index).addEventListener("mouseover", () => {
//         hover(index);
//     })      
// };

// for (let index = 1; index <= 5; index++) {
//     document.getElementById("star" + index).addEventListener("mouseout", () => {
//         hover(0);
//     })      
// };


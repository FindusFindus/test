import * as $ from "jquery";
import { Review } from "./interfaces";

function renderMovie(movieData: Review) {
    document.getElementById("movietitle").innerText = movieData.Title;
    document.getElementById("moviedescription").innerText = movieData.Description;
    document.getElementById("poster").setAttribute("src", movieData.Poster);

    let actorHtml = "";
    movieData.Actors.forEach(actor => {
        actorHtml = actorHtml + "<li>" + actor + "</li>";
        console.log(actorHtml)
    });
    document.getElementById("actors").innerHTML = actorHtml;
} 
import {movieData} from "./data";  
renderMovie(movieData);

function changeStarRating(grade) {
    let currentlyFilledStars = document.querySelectorAll(".filledStar");
    Array.from(currentlyFilledStars).forEach(element => {
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


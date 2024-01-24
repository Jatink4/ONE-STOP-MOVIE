'use strict';
/**add event on mutiple event */
const addEventOnElements = function(elements,eventType,callback){
    for (const elem of elements) elem.addEventListener(eventType,callback);
}
/**toggle search box in mobile device||small screen */
const searchBox = document.querySelector("[search-box] ");
const searchTogglers = document.querySelectorAll("[search-toggler]");
addEventOnElements(searchTogglers,"click",function(){
 searchBox.classList.toggle("active");
});

//Store movieId in local Storage when you click any movie card
const getMovieDetail=function(movieId){window.localStorage.setItem("movieId",String(movieId));
}
const getMovieList=function(urlParam,genreName){
    window.localStorage.setItem("urlParam",String(urlParam));
    window.localStorage.setItem("genreName",String(genreName));
}
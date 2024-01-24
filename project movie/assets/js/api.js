const api_key='35b70cec2e37bfcf1da0f87d003b230b';
const imageBaseURL='https://image.tmdb.org/t/p/';
/**fetch data from a server using the url and passes the result in json data to a callback function along with an optional parameter if has optionalparam */
const fetchDataFromServer=function(url,callback,optionalParam){
    fetch(url)
    .then(response=>response.json())
    .then(data=>callback(data,optionalParam));
}
export{imageBaseURL,api_key,fetchDataFromServer};
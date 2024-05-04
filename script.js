
 
 
 
 
 const getMovieInfo= async (movie)=>{
    const ApiKey ="ad3d2ddd"
    const url=`http://www.omdbapi.com/?apikey=${ApiKey}&t=${movie}`;
    
    const res=await fetch(url);
    const data= await res.json();
    
    showMovie(data);
}
const showMovie=(data)=>
{
    const 
        {  Title , Year , Ratings , Runtime, Genre,Director,Actors,Language,Country,Poster,BoxOffice,imdbRating}=data;

     const movieElement=document.createElement("div")
     movieElement.classList.add("movie-data");
     const movieGenre=document.createElement("div")
     movieGenre.classList.add("movie-genre")
     const movieRatings=document.createElement("div")
     movieRatings.classList.add("movie-ratings")
     Ratings.forEach((elem)=>
     {
      const p=document.createElement("p");
      p.innerHTML=elem.Source;
      p.innerHTML=elem.Value;
      movieRatings.appendChild(p);
      console.log(elem);
     });
     Genre.split(",").forEach((elem)=>
     {
      const p=document.createElement("p");
      p.innerHTML=elem;
      movieGenre.appendChild(p);
     });


    movieElement.innerHTML =`
    
    
    <img id="image" src="${Poster}"/>
    <h1>${Title}</h1>
    <h3><b>Actors</b>:${Actors}</h3>
    <h5>Year:${Year}</h5>

    
    <h5><b> Country</b>:${Country}</h5> 
    <h5><b>Language</b>:${Language}</h5> 
    <h5><b>Director</b>:${Director}</h5>
    <h5><b>Runtime</b>:${Runtime}</h5>
    <h5><b>BoxOffice</b>:${BoxOffice}</h5>
    <h5><b>Ratings(imbdb)</b>&#11088;:${imdbRating}</h5> `
    movieElement.appendChild(movieRatings);
    movieElement.appendChild(movieGenre);
    movieContainer.appendChild(movieElement);


            

}



const searchBar= document.querySelector('form');
const movieContainer=document.querySelector(".movie-container");
const input=document.querySelector("input");


searchBar.addEventListener("submit",function(e)
{   movieContainer.innerHTML=""
    e.preventDefault();
    if(input.value==0) 
    {
        movieContainer.innerHTML=`<h1 id="no-res">No results found </h1>`
    }
    else{
        const movieName= input.value.trim();
        getMovieInfo(movieName);
    }
    


});
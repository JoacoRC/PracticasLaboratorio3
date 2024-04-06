const returnMovieTitle = (watchlist) => {
    return watchlist.map((movie) => {
        if (movie.Director === "Christopher Nolan" && movie.imdbRating > 8.0) {
            return movie.Title;
        } else {
            return undefined;
        }
    }).filter(movie => movie);
}
const titlesArray = returnMovieTitle(watchList);
console.log(titlesArray);

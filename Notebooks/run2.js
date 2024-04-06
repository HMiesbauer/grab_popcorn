// Get data from file
function fetchDataFromCSV() {
    return fetch('movie_data.csv').then(response => response.text()).then(text => {
        const rows = text.split('\n').slice(1); // Skip header row
            const movies = rows.map(row => {
                const columns = row.split(',');
                return { 
                    imdb_id: columns[0],
                    id: columns[1],
                    adult: columns[2],
                    belongs_to_collection: columns[3],
                    genres: columns[4],
                    original_language: columns[5],
                    original_title: columns[6],
                    overview: columns[7],
                    popularity: columns[8],
                    release_date: columns[9],
                    revenue: columns[10],
                    runtime: columns[11],
                    status: columns[12],
                    title: columns[13],
                    video: columns[14],
                    vote_average: columns[15],
                    vote_count: columns[16]
                    
                };
                
            });
            console.log("HELLOOO:", movies);
            return movies;
           
        })};
// create drop down box
        function createDropDown(movies){

        let genres = movies.map(movie => movie.genres);
        let customerChoice = [...new Set(genres)];

        // console.log("hello:" , customerChoice); this is returning customerChoice

           d3.select("#movieDropDown")
           .selectAll("option")
           .data(customerChoice)
           .enter()
           .append("option")
           .text(d => d)
           .attr("value", d => d);
           
     }

 //  check if drop down box working
   fetchDataFromCSV()
         .then(movies => createDropDown(movies))
         .catch(error => console.error(error));

    
 // change bar chart based on selection
 function updateChart(selectedGenre){
    // console.log("hi:", selectedGenre) selectedGenre is getting returned
    fetchDataFromCSV().then(movie => {
        // filter
        let movieGenre = movie.filter(movie => movie.genres === selectedGenre);
        console.log("is this printing?:", movieGenre.map(movie => movie.popularity)); 
        // sort
        movieGenre.sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity));
        // get top 10 movies
        let topTen = movieGenre.slice(0, 10);
        // console.log("hi hi hi:", topTen)
        // extract titles and votes
        let movieTitles = topTen.map(movie => movie.title);
        let popularityValues = topTen.map(movie => parseFloat(movie.popularity));

    // create bar chart
    let trace1 = [{
        x: popularityValues,
        y: movieTitles,
        type: "bar",
        orientation: "h"
    }];

    let layout1 ={
        title: "Top 10 Popular Movies by Genre",
        xaxis: {title: "Movie Title"},
        yaxis: {title: "Popularity"}

};
    Plotly.newPlot("bar", trace1, layout1);
    });
 }

// on click change chart -- this isn't working
document.getElementById("movieDropDown").addEventListener('change', function(event) {
let selectedGenre = event.target.value;
// console.log("does this work?:", selectedGenre)
updateChart(selectedGenre);
});

// start point of chart
updateChart('Action');

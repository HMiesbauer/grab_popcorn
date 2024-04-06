
let movies = []

// Get data from file

function fetchDataFromCSV() {
    return d3.csv('movie_data.csv');
}

 // create drop down box
function createDropDown(movies){

        let genres = movies.map(movie => movie.genres);
        let customerChoice = [...new Set(genres)];
        let dropdown = d3.select("#movieDropDown");

           dropdown.selectAll("option")
           .data(customerChoice)
           .enter()
           .append("option")
           .text(d => d)
           .attr("value", d => d);
           
           dropdown.on("change", function() {
            updateChart(this.value);
        });
    };

   
 // change bar chart based on selection
 function updateChart(selectedGenre){

// filter
        const movieGenre = movies.filter(movie => movie.genres === selectedGenre);

// sort
        movieGenre.sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity));

// get top 10 movies
        let topTen = movieGenre.slice(0, 10);

// get movie titles and popularity
        let movieTitles = topTen.map(movie => movie.title);
        let popularityValues = topTen.map(movie => parseFloat(movie.popularity));

// create bar chart
    let trace1 = [{
        x: movieTitles,
        y: popularityValues ,
        type: "bar",
        orientation: "h"
    }];

    let layout1 ={
        title: "Top 10 Popular Movies by Genre",
        xaxis: {title: "Movie Title"},
        yaxis: {title: "Popularity"}

};
    Plotly.newPlot("bar", trace1, layout1);

};

// create drop down, and update chart
fetchDataFromCSV()
    .then(data => {
        movies = data;
        createDropDown(movies);
        updateChart('Action'); 
    })
    .catch(error => console.error(error));
const apiUrl = "https://www.omdbapi.com/?t="

//empty array to store data
let titleArray = [];
let runtimeArray = [];
let genreArray = [];
let metascoreArray = [];
let imbdArray = [];

// check top 10 movies
for (let i = 0; i < 20; i++){
    let moviesList = topmovies[0].title[i]
    // console.log(moviesList)
    url = apiUrl + moviesList + "&apikey=trilogy"
    d3.json(url).then(function(data){
        // console.log(data);
        var title = data.Title;
        var runtime = (data.Runtime).replace(' min', '');
        var genre = data.Genre;
        var metascore = data.Metascore;
        var imbd = (data.imdbRating) * 10;

        //append values to empty list
        titleArray.push(title);
        runtimeArray.push(runtime);
        genreArray.push(genre);
        metascoreArray.push(metascore);
        imbdArray.push(imbd);

        // REMOVE these ratings because some movie api doesn't have it included
        // var database = (data.Ratings[0].Value).replace('/10', '');
        // var rotten = (data.Ratings[1].Value).replace('%', '');
        // var metacritic = (data.Ratings[2].Value).replace('/100', '');
            
        // console.log(title);
        // console.log(runtime);
        // console.log(genre);
        // console.log(metascore);
        // console.log(imbd);

    // console.log(titleArray);
    // console.log(runtimeArray);
    // console.log(genreArray);
    // console.log(metascoreArray);

    let trace1 ={
        x: titleArray,
        y: runtimeArray,
        type: 'bar',
        name: 'Runtime (min)'
    };

    // let trace2 ={
    //     x: titleArray,
    //     y: metascoreArray,
    //     type: 'bar',
    //     name: 'Metascore Rating'
    // };

    let trace3 ={
        x: titleArray,
        y: imbdArray,
        type: 'bar',
        name: 'IMBD Rating'
    };

    let layout ={
        title: 'Top 20 Popular Movie Ratings and Runtime',
        xaxis: {
            tickangle: -45
        },
        barmode: 'group'
    };

    let datavalues = [trace1, trace3]
    Plotly.newPlot('plot', datavalues, layout)

    // console.log(datavalues)
})};
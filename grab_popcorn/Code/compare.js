apiUrl = "https://www.omdbapi.com/?t="

// code obtained from chatgpt asking how to save and split an input entered from a textbox
function runCodeAfterInput(){
    var input = document.getElementById('arrayInput').value;
    var array = input.split(',');
    window.storedArray = array;
    // console.log("Array Stored: " + JSON.stringify(storedArray));

    let titleArray = [];
    let runtimeArray = [];
    let genreArray = [];
    let metascoreArray = [];
    let imbdArray = [];

    for (let i = 0; i < storedArray.length; i++){
        // console.log(storedArray)
        let compareMovies = storedArray[i]
        // console.log(compareMovies);
        url = apiUrl + compareMovies + "&apikey=trilogy"
        d3.json(url).then(function(data){
            // console.log(data);
            var title = data.Title;
            var runtime = (data.Runtime).replace(' min', '');
            var genre = data.Genre;
            var metascore = data.Metascore;
            var imbd = (data.imdbRating) * 10;
            
            // console.log(title);
            // console.log(runtime);
            // console.log(genre);
            // console.log(metascore);
            // console.log(imbd);
        
            titleArray.push(title);
            runtimeArray.push(runtime);
            genreArray.push(genre);
            metascoreArray.push(metascore);
            imbdArray.push(imbd);

            var trace1 ={
                x: titleArray,
                y: runtimeArray,
                name: 'Runtime (min)',
                type: 'bar'
            };
            
            // var trace2 ={
            //     x: titleArray,
            //     y: metascoreArray,
            //     name: 'Metascore Rating',
            // //     type: 'bar'
            // };
            
            var trace3 ={
                x: titleArray,
                y: imbdArray,
                name: 'IMBD Rating',
                type: 'bar'
            };
    
            var data = [trace1, trace3]
    
            var layout = {
                title: 'Movie Ratings and Runtime',
                xaxis: {
                    tickangle: -45
                },
                barmode: 'group'
            };
            
            Plotly.newPlot('bar', data, layout);
        })};
}

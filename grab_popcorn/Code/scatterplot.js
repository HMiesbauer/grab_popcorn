
// Call the function to fetch data
function fetchDataFromCSV() {
    return new Promise((resolve, reject) => {
        d3.csv('movie_data_test.csv')
            .then(data => {
                // console.log("fetched data:", data) - works
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    }); 
}

// function to create scatterplot

function createBubbleChart(data) {

// filter out any movie with $0 revenue
    let filteredMovies = data.filter(movie => parseFloat(movie.revenue) > 0);
        // console.log("Filtered data:", filteredMovies); -- works
    // console.log("Filtered data:", data.filter(movie => movie.revenue)); this works filtering is working
// sort
   filteredMovies.sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity));

// set variables for the plot
    let grossRevenue = filteredMovies.map(movie => parseFloat(movie.revenue));
    let reviewerVotes = filteredMovies.map(movie => parseFloat(movie.popularity));
    let movieLength = filteredMovies.map(movie => parseFloat(movie.runtime));
 
    // console.log("runtime:", movieLength); -- works
    // console.log("Reviewer votes:", reviewerVotes); both these variables are printing


// define margins
    const margin = {top: 30, right: 20, bottom: 40, left: 60};
    const width = 800 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;
    
// set x, y axis layout & radius
    console.log("Filtered movies data before scale definition:", filteredMovies);

    const x = d3.scaleLinear()
        .domain([0, 700])
        .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
        .domain([0, 600])
        .range([height - margin.bottom, margin.top]);

    const radius = d3.scaleLinear()
        .domain([0, d3.max(grossRevenue)])
        .range([1, 20]);
    
        console.log("X scale domain after scale:", x.domain());
        console.log("X scale range after scale:", x.range());
        console.log("Y scale domain after scale:", y.domain());
        console.log("Y scale range after scale:", y.range());

// create svg container
    const svg = d3.select(".container")
        .append("svg")
        .attr("id", "bubble-chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

// // add tooltip (sourced from , April 8, 2024)
    const tooltipGroup = svg.append("g")
        .style("display", "none");

    const tooltipText = tooltipGroup.append("text")
        .attr("x", 10)
        .attr("y", 20)
        .attr("font-size", "12px");
     
        
// container for titles
    const titles = svg.selectAll("text")
        .data(filteredMovies)
        .enter()
        .append("text")
        .attr("x", d => x(parseFloat(d.runtime)))
        .attr("y", d => y(parseFloat(d.popularity)))
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .style("fill", "black")
        .text(d => d.title)
        .style("visibility", "hidden"); // Initially hide the titles

// create bubbles mouseover code ChatGPT 2022, personal communication, April 9, 2024
    const circles = svg.selectAll("circle")
        .data(filteredMovies)
        .enter()
        .append("circle")
        .attr("cx", d => x(parseFloat(d.runtime)))
        .attr("cy", d =>  y(parseFloat(d.popularity)))
        .attr("r", d => radius(parseFloat(d.revenue))) 
        .style("fill", "orange")
        .style("opacity", 0.7)
        .attr("data-title", d => d.title)
        .on("mouseover", function () {
            const title = this.getAttribute("data-title");
                titles.filter(t => t.title === title)
        .style("visibility", "visible");
})
        .on("mouseout", function () {
            titles.style("visibility", "hidden");
});

// set x axis & add to the svg
// Remove existing x-axis
    svg.select(".x-axis").remove();
    const xAxis = d3.axisBottom(x)
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis)
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");

    svg.append("text")
        .attr("class", "x-label")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom)
        .attr("text-anchor", "middle")
        .attr("font-size", "25px")
        .text("Movie Runtime");

// set y axis  & add to the svg
    const yAxis = d3.axisLeft(y);
    svg.append("g")
        .call(yAxis);

    svg.append("text")
        .attr("class", "y-label")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -margin.left + 20)
        .attr("font-size", "25px")
        .text("Movie Popularity");
      

    // // Extract x and y values from your dataset. ChatGPT 2022, personal communication, April 9, 2024
    // const xValues = filteredMovies.map(d => parseFloat(d.runtime));
    // const yValues = filteredMovies.map(d => parseFloat(d.popularity));

    // // Perform linear regression
    // const regressionLine = ss.linearRegression([xValues, yValues]);

    // // Get slope and intercept
    // const slope = regressionLine.m;
    // const intercept = regressionLine.b;

    // // Plot the regression line
    // const regressionLineData = [
    //     { x: d3.min(xValues), y: slope * d3.min(xValues) + intercept },
    //     { x: d3.max(xValues), y: slope * d3.max(xValues) + intercept }
    // ];

    // // Add the regression line to your scatterplot
    // svg.append("path")
    //     .datum(regressionLineData)
    //     .attr("fill", "none")
    //     .attr("stroke", "black")
    //     .attr("stroke-width", 5)
    //     .attr("d", d3.line()
    //         .x(d => x(d.x))
    //         .y(d => y(d.y))
    //     );
    //     console.log(regressionLineData);

 
// return the svg element
return svg.node();
};


fetchDataFromCSV()
   .then(filteredMovies => {
        createBubbleChart(filteredMovies);
   })
   .catch(error => {
    console.error("error fetching csv data:", error)
});
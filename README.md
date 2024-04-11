# grab_popcorn </br>
**Overview**</br>
* Project delving into what external factors influence movie popularity by Ashley Nguyen and Holly Miesbauer </br>

**Analysis & Instructions How To Interact With The Charts:** </br>








![Capture](https://github.com/HMiesbauer/grab_popcorn/assets/150979374/ba6740c6-1256-43c4-a8eb-357cd73eb651) </br>
* Movie popularity
* How to interact with the chart. Select your favorite genre from the drop down menu and based on your selected genre you will be presented with ten of the most popular movies within that genre to watch in the future!
* Demo here: </br>


 
![Movie Revenue Runtime Popularity](https://github.com/HMiesbauer/grab_popcorn/assets/150979374/c7a60263-938e-43c7-a3f9-0a26ce6f7cb3) </br>
We created a Bubble Chart with the D3.js library to visually represent the relationship between a movie's revenue, popularity and runtime. In comparing these variables there are a few key insights we can glean from the chart.</br>
* First, as we would intuitively believe there does seem to be a positive correlation between popularity and a movie's gross revenue. We can see in the plot that the more popular a movie is, revenue is higher </br>
* However, we do see significant variability in revenue as it doesn't wholly increase with popularity/<br>


![Movie Revenue Runtime Popularity with markup](https://github.com/HMiesbauer/grab_popcorn/assets/150979374/480cb19b-881a-4f09-8201-231f59a89c55) </br>

* Another key insight we see is that there isn't the same relationship with movie revenue and runtime as we see with a movie's popularity and it's gross revenue. There is no strong linear trend between the two. As we can see in the plot, some shorter movies have significant revenue while some shorter movies do not. </br>
* In that same vein, longer movies also exhibit a range of revenue levels. </br>


![Movie Revenue Runtime Popularity Outlier](https://github.com/HMiesbauer/grab_popcorn/assets/150979374/b0dcffc3-9a59-4646-a589-c131881b7e31)

* The one outlier "Minions" released in 2015 grossed $1,156,730,962 was a little over 90 minutes. While widely popular and profitable, it also was a short movie. </br>
* As compared to say for example Avatar, which grossed a phenomenal $2,787,965,087 with a runtime of 162 minutes but the audience didn't clearly love with a popularity rating of 185. 

![Mouse Hover Reveals Movie Title](https://github.com/HMiesbauer/grab_popcorn/assets/150979374/a5f94411-fc64-49a0-afde-ae36bd54cae1) </br>
* Interacting with the Bubble Chart. Mouse hover over the revenue circles reveals the title of the movie. </br>
* While the team was proficient in using visualization tools such as Leaflet and Plotly prior to this project. For this project in particular, the team chose to learn visualizations with D3.js in particular due to customization options like mouse hover text as well ast the comphrensive tutorials and documentation available for visualizations with D3.js. 
* Demo here: </br>


![movie revenue runtime popularity linear regression](https://github.com/HMiesbauer/grab_popcorn/assets/150979374/67bb86a9-6afe-4f41-bc8a-feeadfc28f15) </br>
* As we see a positive coefficient here with an increase in runtime & increase in popularity, revenue also increases (the dependent variable here). This is typical of what we see that the dependent variable will also increase when the independent variables increase. </br>


**Efforts Made For Ethical Considerations:** </br>
 In order to ensure that we were being ethical in our approach to using data we chose datasets that didn't include personal information of individuals. Additionally, the datasets that we used contained aggregrate data of voter choices so that wouldn't be tied to individual choices of the viewers movie preferences. 



**Conclusion:** </br>

* While the bubble chart visualzation did provide insights into the relationships of movie runtime, popularity and revenue it does not establish causality. Other factors such as we saw with movie genres as well as advertising or even when the movie was released can all influence a movie's revenue independent of the movie's popularity or how long it runs.

**Works Cited:** </br>



**Data and Research Sources:** </br>
* Dataset for this project was dowloaded [here](https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset?select=ratings.csv) and [here](https://www.omdbapi.com/) </br>
* D3.js libraries: </br>
  * https://observablehq.com/@d3/scatterplot-tour?intent=fork </br>
  * https://d3js.org/getting-started#try-d3-online






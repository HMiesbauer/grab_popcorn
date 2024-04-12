# Overview</br>
* Project diving into what external factors influence movie popularity by Ashley Nguyen and Holly Miesbauer </br>

## Static Pages and Instructions </br>
* Mouse Hover Bar Chart: [here](https://hmiesbauer.github.io/grab_popcorn/grab_popcorn/Code/runtime.html) </br>
  * Hover mouse over each bar to display the movie title, runtime length (minutes), and imbd rating </br>

* Text Box Bar Chart: [here](https://hmiesbauer.github.io/grab_popcorn/grab_popcorn/Code/compare.html)</br>
  * Enter two movies into the text box with the format: movie,movie (note: enter spaces or colons normally)
  * Click the Search button to reveal the two bar charts comparing the movies entered.
  * Hover over a set of the bar graph to show the movie title along with Runtime (min) and IMBD Rating.</br>

* Drop Down Bar Chart: [here](https://hmiesbauer.github.io/grab_popcorn/grab_popcorn/Code/movies.html)</br>
  * Select your favorite genre from the drop down menu and based on your selected genre you will be presented with ten of the most popular movies within that genre to watch in the future!</br>

* Mouse Hover Bubble Chart: [here](https://hmiesbauer.github.io/grab_popcorn/grab_popcorn/Code/scatterplot.html)</br>
  * Hover over the bubbles to reveal movie titles.</br>

## Goals
* What influences a movies popularity?
  * Does runtime effect popularity?
  * Are certain genres more popular than others?
  * Are higher grossing movies more popular?

# Background
Movies are made with intention of being popular and receive high earnings in the box office. But what do film makers have to consider make their movie popular? According to a study from statistica, audience ages of 18-55+ prefer movies with runtimes between 91 to 120 minutes. With this in mind, does that mean film makers should strive to release films within that runtime? Or are there other factors that influences a movie popularity? Audiences are more likely to go to movies of their preferred genre, but that mean some genres are more liked than others? Lastly, if movies are earning more revenue compared to others, does that mean they are more popular? Movies like Avatar had the highest box office earning of $2.78 billion with a runtime of 162 yet had a lower popularity than Minoions with a gross earning of $1.56 billion and lower runtime of 90 minutes. With this in mind, what influences movie popularity? Runtime? Genre? Box Office Earnings?

# Analysis </br>

![top20movies_runtime](https://github.com/HMiesbauer/grab_popcorn/assets/150317761/38d15731-11e1-4c96-ab4c-84fdd47c4ae0) </br>
Does runtime effect popularity? <br/>
* After using BeautifulSoup to webscrape IMBD Charts for the most popular movies titles, we looped through the omdapi to create a Bar Graph using Plotly to compare movie runtimes and IMBD ratings.
* From the bar chart displaying the Top 20 Movie Ratings and Runtime, we cannot see any significant differences between the runtime and popularity ratings. So further research is needed. <br/>


![longest_runtime](https://github.com/HMiesbauer/grab_popcorn/assets/150317761/28101e5e-244a-4c54-8404-74f945f17582) <br/>
Are longer movies more popular? <br/>
* The chart shows the longer movies from the Top 20 Movie Ratings and Runtime. The movie Then Ten Commandments had a longer runtime of 220 minutes which resulted in a slightly lower IMBD rating of 79 and popularity ranking of 20 compared to Oppenheimer with a runtime of 180 minutes with 84 IMBD rating and 7 popularity ranking.
* According to screendaily, audiences consider whether or not movies are worth their time. These factors may include if the reviews are good or if the film “as long as it needs to tell its story in an engaging way.” This can be seen from Avengers: Endgame having a long runtime of 180 minutes yet it had a high rating and huge earning of $2.8 billion at the global box office.
* This just shows that runtime doesn’t necessarily correlate with popularity, yet the rating or how compelling the film tells the story reflects the popularity. </br>



![same_runtime](https://github.com/HMiesbauer/grab_popcorn/assets/150317761/d73b1165-84c5-4a6b-9ca7-0b43673c2ce9) </br>
Same Runtime, Differing Popularity <br/>
* In addition to longer runtimes, the chart above shows two movies with the same runtime. 
* Although both movies had a runtime of 110 minutes, Damsel received a higher IMBD rating of 61 and ranked 4 in popularity compared to Abigail having only 48 and ranking only 12. Both movies are within the preferred runtime among ages of 18-55+ of being within 91-120 minutes (statista), but the ratings show otherwise.
* These results conclude that runtime does not reflect movie ratings, yet there may be other factors. <br/>



![agedependency](https://github.com/HMiesbauer/grab_popcorn/assets/150317761/9ef8b9d9-203b-48fa-b619-bd003c02f5ac) <br/>
Does runtime have any other dependencies? <br/>
* The graph above shows two movies with high ratings and box office earnings. The Lion King is the top animed box office movie with a runtime of 88 minutes and 85 ratings, whereas Avatar is the highest earning box office movie with a runtime of 162 minutes and 79 rating.
* Both movies are highly rated, yet have vastly different runtimes. This might be due to the target audience where children are more likely to watch animated movies compared to adults. Woombie states that children have shorter attention spans than adults, so kids are drawn to movies that can maintain their attention. “If a movie is too complex or too long, it’s likely that a child will become bored or restless.”
* So runtime may have other dependencies in addition to a compelling story, such as a targeted audience age group. <br/>






![Capture](https://github.com/HMiesbauer/grab_popcorn/assets/150979374/ba6740c6-1256-43c4-a8eb-357cd73eb651) </br>
* By allowing users to choose their favorite genre they can uncover hidden gems. Movies they might not otherwise have heard of but might appeal to them based on their favorite genre.
* One interesting note is that some genre have widely popular movies such as the Hunger Games: Mockingjay part I. In contrast, looking at the rest of the suggested movie titles in the top 10 the popularity is lukewarm at best.
</br>


 
![Movie Revenue Runtime Popularity](https://github.com/HMiesbauer/grab_popcorn/assets/150979374/c7a60263-938e-43c7-a3f9-0a26ce6f7cb3) </br>
We created a Bubble Chart with the D3.js library to visually represent the relationship between a movie's revenue, popularity and runtime. In comparing these variables there are a few key insights we can glean from the chart.</br>
* First, as we would intuitively believe there does seem to be a positive correlation between popularity and a movie's gross revenue. We can see in the plot that the more popular a movie is, revenue is higher </br>
* However, we do see significant variability in revenue as it doesn't wholly increase with popularity.<br>


![Movie Revenue Runtime Popularity with markup](https://github.com/HMiesbauer/grab_popcorn/assets/150979374/acf7a891-137a-4f53-a7d3-0e6a386a1019) </br>

* Another key insight we see is that there isn't the same relationship with movie revenue and runtime as we see with a movie's popularity and it's gross revenue. There is no strong linear trend between the two. As we can see in the plot, some shorter movies have significant revenue while some shorter movies do not. </br>
* In that same vein, longer movies also exhibit a range of revenue levels. </br>


![Movie Revenue Runtime Popularity Outlier](https://github.com/HMiesbauer/grab_popcorn/assets/150979374/250b9a61-082f-4ee6-a75a-ddc52211ed4f)

* The one outlier "Minions" released in 2015 grossed $1,156,730,962 was a little over 90 minutes. While widely popular and profitable, it also was a short movie. </br>
* As compared to say for example Avatar, which grossed a phenomenal $2,787,965,087 with a runtime of 162 minutes but the audience didn't clearly love with a popularity rating of 185. 


![Movie Revenue Runtime Popularity Mouse Hover](https://github.com/HMiesbauer/grab_popcorn/assets/150979374/42cf35d8-d874-4e29-9576-ed4ec7f54f32) </br>

* Interacting with the Bubble Chart. Mouse hover over the revenue circles reveals the title of the movie. </br>
* While the team was proficient in using visualization tools such as Leaflet and Plotly prior to this project. For this project in particular, the team chose to learn visualizations with D3.js in particular due to customization options like mouse hover text as well as the comphrensive tutorials and documentation available for visualizations with D3.js. 
 </br>

# Conclusion </br>
* Are longer movies more popular? The runtime of a movie not effect its popularity entirely. Audiences take into account whether or not a movie is worth their time. Screendaily mentions that films that tells a story in an engaging way will be more popular and result in higher box office earning. This can be seen from Avengers: Endgame with a long runtime of 180 minutes, yet earned $2.8m at the global box office with an IMBD rating of 8.4/10.
* Statistica states that the preferred runtime among ages of 18-55+ is around 91-120 minutes, yet the ratings of the movies Damsel and Abigail differ even with the same runtime of 110 minutes. Although audiences prefer movies within this runtime range, there are other factors that influence a movie's popularity.
* Does runtime have any other dependencies? As seen in the chart comparing The Lion King and Avatar, both movies have vast runtime length yet are both highly rated and are high in the movie box office rating. This may be influenced by the audience age groups. Children are more likely to watch movies that are engaging without a complex story (woombie). This results in age being a dependency of movie runtime and popularity.
* Are higher grossing movies more popular? The bubble chart of Movie Revenue vs. Popularity and Runtime has a slight positive correlation between popularity and gross revenue meaning the more popular a movie, the higher the revenue, but it does not increase its popularity. In terms of movie revenue and runtime, there is no strong relationship. Some shorter movies have significant revenue while some shorter movies do not.
* The one outlier "Minions" released in 2015 grossed $1,156,730,962 was a little over 90 minutes. While widely popular and profitable, it also was a short movie. As compared to say for example Avatar, which grossed a phenomenal $2,787,965,087 with a runtime of 162 minutes but the audience didn't clearly love with a popularity rating of 185.
<br/><br/>
* While the bubble chart visualzation did provide insights into the relationships of movie runtime, popularity and revenue it does not establish causality. Other factors such as we saw with movie genres as well as advertising or even when the movie was released can all influence a movie's revenue independent of the movie's popularity or how long it runs.
* From the relations of runtime and popularity shown in the bar charts, runtime does not directly correlate with movie popularity. The runtime of movies have other dependencies that influence the popularity. These include but are not limited to: ratings, target audience age group, or how engaging the story is being conveyed. <br/>

# Works Cited </br>
* [screendaily](https://www.screendaily.com/features/does-a-long-running-time-help-or-hurt-a-films-box-office-performance/5144271.article)
* [statista](https://www.statista.com/statistics/860072/preferred-movie-length-age/)
* [woombie](https://woombie.com/blog/post/why-its-important-to-consider-your-childs-age-when-choosing-movies)
* [cnn](https://www.cnn.com/2024/01/02/business/us-box-office-2023-best-since-before-pandemic/index.html#:~:text=The%202023%20domestic%20box%20office,sales%20reached%20before%20the%20pandemic)
* [cinemovietv](https://cinemovie.tv/Blogs/5-reasons-we-love-movies)
* [cornell](https://blogs.cornell.edu/learning/why-do-we-love-the-movies/#:~:text=They%20take%20us%20away%20from,is%20why%20we%20love%20them)



# Data and Research Sources </br>
* Dataset for this project was dowloaded [here](https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset?select=ratings.csv)
* [ombdiapi](https://www.omdbapi.com/) - ombdi api used to gather movie runtime and imbd ratings
* [imbd](https://www.imdb.com/chart/moviemeter/?sort=rank%2Casc) - imbd charts of top movie popularity used to webscrape the top 100 movie titles</br>
* D3.js libraries: </br>
  * https://observablehq.com/@d3/scatterplot-tour?intent=fork </br>
  * https://d3js.org/getting-started#try-d3-online
 
## Efforts Made For Ethical Considerations: </br>
 In order to ensure that we were being ethical in our approach to using data we chose datasets that didn't include personal information of individuals. Additionally, the datasets that we used contained aggregrate data of voter choices so that wouldn't be tied to individual choices of the viewers movie preferences. 






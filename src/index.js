//Go get react and react-dom from the modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAJ1oSoly1GcKqHCzMAZ931dHy4u940js0';


// Create a new component. this component should produce some HTML
class App extends Component {
  constructor (props) {
    super (props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };
    //When app is rendered, videoSearch below is fired, 
    //and defaults to 'surfboards' as searth term
    this.videoSearch('surfboards');
  }

  //Search method
  videoSearch(term) {
    //whenever new term is searched in input, video array in state is re-set with
    //first five results of new term from youtube API
    //selected video is the first video of the AJAX response
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
      //ES6 syntax: if key and value are the same, you can just leave the key name. 
      //Same as this.setState({ videos:videos });
    });
  }
  //props is used to pass data from a parent to a child
  //Give VideoList a property 'videos' so that it can access the video array
  //from state since it will need to pass that video data down to VideoListItem
  //Everytime App re-renders, VideoList will get the new videos from state.
  
  render () {
    return (
      <div>
        <SearchBar
          //When SearchBar calls onSearchTermChange it will do so with the search 
          //term string passed into the videoSearch method 
          onSearchTermChange={term =>this.videoSearch(term)}/>
        <VideoDetail 
          video={this.state.selectedVideo} />
        <VideoList
          //onVideoSelect is a property name of function that updates the value 
          //of state key 'selectedVideo'
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos={this.state.videos} /> 
      </div>
    );
  }  
}

// Take this component's generated HTML and put on the page (in the DOM).
ReactDOM.render(
<App />, document.querySelector('.container'));

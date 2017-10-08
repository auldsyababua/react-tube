//Go get react and react-dom from the modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAJ1oSoly1GcKqHCzMAZ931dHy4u940js0';


// Create a new component. this component should produce some HTML
class App extends Component {
  constructor (props) {
    super (props);

    this.state = { videos: [] };

    //when app rendered, YTSearch is fired, and video array in state is re-set with
    //first five results of 'surfboards' from youtube API
    YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      //ES6 syntax: if key and value are the same, you can just leave the key name. 
      //Same as this.setState({ videos:videos });
    });
  }
  //props is used to pass data from a parent to a child
  //Give VideoList a property 'videos' so that it can access the video array
  //from state since it will need to pass that video data down to VideoListItem
  //Everytime App re-renders, VideoList will get the new videos from state
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} /> 
      </div>
    );
  }  
}

// Take this component's generated HTML and put on the page (in the DOM).
ReactDOM.render(
<App />, document.querySelector('.container'));

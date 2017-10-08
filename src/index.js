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

    YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      //ES6 syntax: if key and value are the same, you can just leave the key name. 
      //Same as this.setState({ videos:videos });
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }  
}

// Take this component's generated HTML and put on the page (in the DOM).
ReactDOM.render(
<App />, document.querySelector('.container'));

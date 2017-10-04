//Go get react and react-dom from the modules
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCmtXy1ADvcwfOrgyvjIKvka7bx8x7Y7EA';



// Create a new component. this component should produce some HTML
const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );  
}

// Take this component's generated HTML and put on the pafe (in the DOM).
ReactDOM.render(
<App />, document.querySelector('.container'));

//Go get react from the modules

import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. this component should produce some HTML

const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put on the pafe (in the DOM).

ReactDOM.render(
<App />, document.querySelector('.container'));

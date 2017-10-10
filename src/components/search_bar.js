import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super (props);
    this.state = { term:'' } 
  }
  render() {
    return (
      <div className='search-bar'>
        < input 
          value = {this.state.term}
          //whenever input value changes, onInputChange is called (line 20)
          //with new value passed in. onChange happens after onInputChange below.
          onChange = {(event) => this.onInputChange(event.target.value)} /> 
      </div>  
    )
  }

  //line 23 sets state of component with new search term
  //line 24 fires the callback function 'onSearchTermChange'
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
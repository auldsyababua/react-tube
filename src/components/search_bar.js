import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super (props);
    this.state = { term:'' } 
  }
  //line 11 sets state of component with new search term
  //line 12 fires the callback function 'onSearchTermChange'
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className='search-bar'>
        < input 
          value = {this.state.term}
          //whenever input value changes, onInputChange is called (line 20)
          //with new value passed in. onChange happens after onInputChange method.
          onChange = {(event) => this.onInputChange(event.target.value)} /> 
      </div>  
    )
  }
}

export default SearchBar;
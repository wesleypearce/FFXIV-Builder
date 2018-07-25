import React, { Component } from 'react'
import RecipeList from './RecipeList'
import '../style.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render() {
    return(
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid craft-search">
          <div className="container">
            <h1 className="display-4">FFXIV Builder</h1>
            <p className="lead">Search for crafting recipes!</p>
            <input onChange={this.handleInputChange} type="text"/>
          </div>
        </div>
        <RecipeList term={this.state.term}/>
      </React.Fragment>

      // <React.Fragment>
      //   <h3>Search for item to craft</h3>
      //   <input onChange={this.handleInputChange} type="text"/>
      //   <RecipeList term={this.state.term}/>
      // </React.Fragment>
    )
  }

  handleInputChange(event) {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ term: event.target.value })
  }
}

export default SearchBar

import React, { Component } from 'react'
import RecipeList from './RecipeList'
import '../style.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: props.term
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return(
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid craft-search">
          <div className="container">
            <h1 className="display-4">FFXIV Builder</h1>
            <p className="lead">Search for crafting recipes!</p>

            <form>
              <input onChange={this.handleInputChange} value={this.state.term} type="text"/>
              <input type="submit" onClick={this.handleSubmit} value="Search!" />
            </form>

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

  handleSubmit() {
  }

  handleInputChange(event) {
    event.preventDefault()
    this.setState({ term: event.target.value })
  }
}

export default SearchBar

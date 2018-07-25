import React, { Component } from 'react'
import axios from 'axios'

let itemDetail = {}

class RecipeItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    if(itemDetail != null) {
      return (
        <div onClick={this.handleClick}>
          <p>{this.props.name}</p>
          <img src={itemDetail.icon} />
        </div>
      )
    } else {
      return (
        <div onClick={this.handleClick}>
          <p>{this.props.name}</p>
        </div>
    )}
  }

  handleClick() {
    axios.get('https://api.xivdb.com/recipe/' + this.props.id)
      .then(response => {
        Object.assign(itemDetail, response.data)
        this.setState({ isExpanded: true })
    })
  }
}

export default RecipeItem

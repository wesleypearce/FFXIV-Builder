import React, { Component } from 'react'
import axios from 'axios'
import RecipeDetail from './RecipeDetail'

let recipeItems = []

class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        id: 0,
        name: '',
        icon: '',
        ingredients: {}
      }
    }

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    // const recipeItems = []
    axios.get('https://api.xivdb.com/recipe')
    .then(response => {
      console.log(response.data)
      const recipes = Object.values(response.data.filter(recipe => recipe.name.toUpperCase().includes(this.props.term.toUpperCase())))
      recipeItems = recipes.map((recipe) => {
        return <div className="recipe-list" onClick={() => this.handleClick(recipe.id)} key={recipe.id}>{recipe.name}</div>
      })
    })

    if(this.state.recipe.id === 0) {
      axios.get('https://api.xivdb.com/recipe/1')
        .then(response => {
          let ingredients = []

          for(let i = 0; i < response.data.tree.length; i++) {
            ingredients.push({
              name: response.data.tree[i].name,
              quantity: response.data.tree[i].quantity,
              icon: response.data.tree[i].icon
            })
          }

          this.setState({
            recipe: {
              id: response.data.id,
              name: response.data.name,
              icon: response.data.icon,
              ingredients: ingredients
            }
          })
      })

      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                  {recipeItems}
              </div>
              <div className="col-md-6">
                <RecipeDetail recipe={this.state.recipe}/>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <ul>
                  {recipeItems}
                </ul>
              </div>
              <div className="col-md-6">
                <RecipeDetail recipe={this.state.recipe}/>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }

  handleClick(id) {
    axios.get('https://api.xivdb.com/recipe/' + id)
      .then(response => {
        let ingredients = []

        for(let i = 0; i < response.data.tree.length; i++) {
          ingredients.push({
            name: response.data.tree[i].name,
            quantity: response.data.tree[i].quantity,
            icon: response.data.tree[i].icon
          })
        }

        this.setState({
          recipe: {
            id: response.data.id,
            name: response.data.name,
            icon: response.data.icon,
            ingredients: ingredients
          }
        })
    })
  }
}



export default RecipeList

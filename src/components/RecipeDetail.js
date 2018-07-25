import React, { Component } from 'react'

class RecipeDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    // Create ingredient detail view
    let ingredients = []
    for(let i = 0; i < this.props.recipe.ingredients.length; i++) {
      ingredients.push(
        <div className="ingredient">
          <img
           src={this.props.recipe.ingredients[i].icon}
           alt={this.props.recipe.ingredients[i].name}
           width="50px" />
           {this.props.recipe.ingredients[i].quantity} {this.props.recipe.ingredients[i].name}
        </div>
      )
    }

    // map ingredients

    return (
      <div className="recipe">
        <h3>{this.props.recipe.name}</h3><br />
        <img
          src={this.props.recipe.icon}
          alt={this.props.recipe.name} />
        {ingredients}
      </div>
    )
  }
}

export default RecipeDetail

// <div className="table-responsive-sm">
//   <table className="table">
//     <thead>
//       <tr>
//         <th scope="col"></th>
//         <th scope="col">Ingredient</th>
//         <th scope="col">Class</th>
//         <th scope="col">Quantity</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th scope="row">1</th>
//         <td>Mark</td>
//         <td>Otto</td>
//         <td>@mdo</td>
//       </tr>
//       <tr>
//         <th scope="row">2</th>
//         <td>Jacob</td>
//         <td>Thornton</td>
//         <td>@fat</td>
//       </tr>
//       <tr>
//         <th scope="row">3</th>
//         <td>Larry</td>
//         <td>the Bird</td>
//         <td>@twitter</td>
//       </tr>
//     </tbody>
//   </table>
// </div>

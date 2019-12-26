import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};


class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
  }

  removeIngredientHandler = (type) => {
    if (!this.state.ingredients[type]) return;
    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
  }

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                addIngredient={this.addIngredientHandler}
                rmIngredient={this.removeIngredientHandler}
                disabled={disableInfo}
                price={this.state.totalPrice}
                />
            </Aux>
      );
  }
}

export default BurgerBuilder;

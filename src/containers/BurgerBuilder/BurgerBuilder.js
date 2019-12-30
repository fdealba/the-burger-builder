import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

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
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false
  }

  updatePurchaseState = (ingredients) => {
      const sum = Object.keys(ingredients)
        .map(key => {
          return ingredients[key]
        })
        .reduce((newSum, curElem) => {
          return newSum + curElem
        }, 0);
      this.setState({ purchaseable: sum > 0 })
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
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    this.setState({ loading: true })
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Felipe de Alba',
        address: {
          street: 'Teststreet 1',
          zipCode: '41425',
          country: 'Germany'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axios.post('/orders.json', order)
        .then(response => this.setState({ loading: false, purchasing: false }))
        .catch(error => this.setState({ loading: false, purchasing: false }));
    // alert('You Continue');
  }


  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    let orderSummary = (
          <OrderSummary
          ingredients={this.state.ingredients}
          cancel={this.purchaseCancelHandler}
          continueP={this.purchaseContinueHandler}
          price={this.state.totalPrice}/>
        );
    if (this.state.loading) {
        orderSummary = <Spinner />;
    }
    return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                  {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                addIngredient={this.addIngredientHandler}
                rmIngredient={this.removeIngredientHandler}
                disabled={disableInfo}
                purchaseable={this.state.purchaseable}
                price={this.state.totalPrice}
                orderNow={this.purchaseHandler}
                />
            </Aux>
      );
  }
}

export default withErrorHandler(BurgerBuilder, axios);

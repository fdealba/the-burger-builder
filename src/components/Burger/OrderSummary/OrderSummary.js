import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import CustomButton from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('OrderSummary will update')
  }

  render() {
      const ingredientSummary = Object.keys(this.props.ingredients)
      .map(key => {
        return (<li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>:
                 {this.props.ingredients[key]}</li>)
      })
   return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
      {ingredientSummary}
      </ul>
      <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <CustomButton btnType="Danger" clicked={this.props.cancel}>CANCEL</CustomButton>
      <CustomButton btnType="Success" clicked={this.props.continueP}>CONTINUE</CustomButton>
    </Aux>
    )
  }
}

export default OrderSummary;

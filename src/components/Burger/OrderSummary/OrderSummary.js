import React from 'react';
import Aux from '../../../hoc/Aux';
import CustomButton from '../../UI/Button/Button';

const orderSummary = ({ ingredients, cancel, continueP, price }) => {
    const ingredientSummary = Object.keys(ingredients)
      .map(key => {
        return (<li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>:
                 {ingredients[key]}</li>)
      })
   return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
      {ingredientSummary}
      </ul>
      <p><strong>Total Price: ${price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <CustomButton btnType="Danger" clicked={cancel}>CANCEL</CustomButton>
      <CustomButton btnType="Success" clicked={continueP}>CONTINUE</CustomButton>
    </Aux>
    )
}

export default orderSummary;

import React from 'react';
import { BuildControls, OrderButton } from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = ({rmIngredient, addIngredient, disabled, price, purchaseable, orderNow}) => (
   <div className={BuildControls}>
      <p>Current Price: <strong>${price.toFixed(2)}</strong></p>
      {controls.map(({label, type}) => (
        <BuildControl
        key={label}
        label={label}
        rmIngredient={() => rmIngredient(type)}
        addIngredient={() => addIngredient(type)}
        disabled={disabled[type]}/>
        ))}
      <button
      className={OrderButton}
      disabled={!purchaseable}
      onClick={orderNow}>ORDER NOW</button>
   </div>
);


export default buildControls;

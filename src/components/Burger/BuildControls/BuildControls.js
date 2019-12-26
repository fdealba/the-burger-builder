import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = ({rmIngredient, addIngredient, disabled, price}) => (
   <div className={classes.BuildControls}>
      <p>Current Price: <strong>${price.toFixed(2)}</strong></p>
      {controls.map(({label, type}) => (
        <BuildControl
        key={label}
        label={label}
        rmIngredient={() => rmIngredient(type)}
        addIngredient={() => addIngredient(type)}
        disabled={disabled[type]}/>
        ))}
      <button className={classes.OrderButton}>ORDER NOW</button>
   </div>
);


export default buildControls;

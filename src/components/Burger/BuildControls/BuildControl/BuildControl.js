import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = ({label, rmIngredient, addIngredient, disabled}) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button
    className={classes.Less}
    onClick={rmIngredient}
    disabled={disabled}>
    Less</button>

    <button
    className={classes.More}
    onClick={addIngredient}>
    More</button>
  </div>
);

export default buildControl;

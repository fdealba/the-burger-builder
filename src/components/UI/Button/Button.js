import React from 'react';
import classes, { Button } from './Button.module.css';

const button = ({children, clicked, btnType}) => (
  <button
  className={[Button, classes[btnType]].join(' ')}
  onClick={clicked}>{children}</button>
  );

export default button;

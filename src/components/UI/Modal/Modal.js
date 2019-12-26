import React from 'react';
import { Modal } from './Modal.module.css';

const modal = ({show, children}) => (
  <div
    className={ Modal }
    style={{
      transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: show ? '1' : '0'
    }}>
    {children}
  </div>
);

export default modal;

import React from 'react';
import { Modal } from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = ({show, children, modalClosed}) => (
  <Aux>
    <Backdrop show={show} clicked={modalClosed}/>
    <div
      className={ Modal }
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}>
      {children}
    </div>
  </Aux>
);

export default modal;

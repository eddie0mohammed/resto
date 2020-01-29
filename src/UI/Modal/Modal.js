
import React from 'react';

import styles from './Modal.module.css';


function Modal(props){

    const display = props.show ? 'block' : 'none';

     return (
        <div className={styles.modal} style={{display: display}}>
            {props.children}
        </div>
    )
}

export default Modal;
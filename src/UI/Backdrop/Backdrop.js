
import React from 'react';

import styles from './Backdrop.module.css';


function Backdrop(props){


    const display = props.show ? 'block' : 'none';
    return (
        <div className={styles.backdrop} style={{display: display}} onClick={props.hide}>
            
        </div>
    )
}

export default Backdrop;

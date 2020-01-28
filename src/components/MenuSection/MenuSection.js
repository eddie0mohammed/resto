
import React from 'react';

import styles from './MenuSection.module.css';


class MenuSection extends React.Component{


    render(){

        return (
            <div className={styles.menuSection}>

                <p className={styles.menuSection__special}>Special Menu</p>
                <h4 className={styles.menuSection__header}>Delicious Flavour of Autumn</h4>

                <div className={styles.menuSection__cardContainer}>
                    card container
                </div>

                <p className={styles.menuSection__link}>view full menu</p>

            </div>
        )
    }
}

export default MenuSection;

import React from 'react';

import styles from './MenuSection.module.css';

import {Link} from 'react-router-dom';


class MenuSection extends React.Component{


    render(){

        return (
            <div className={styles.menuSection}>

                <p className={styles.menuSection__special}>Special Menu</p>
                <h4 className={styles.menuSection__header}>Delicious Flavour of Autumn</h4>

                <div className={styles.menuSection__cardContainer}>
                    
                    <div className={`${styles.menuSection__card} ${styles.menuSection__card1}`}>

                        <div className={styles.card__img}></div>

                        <h4 className={styles.card__header}>Super BBQ Grill No Smoke</h4>

                        <p className={styles.card__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa!</p>

                    </div>

                    <div className={`${styles.menuSection__card} ${styles.menuSection__card2}`}>

                        <div className={styles.card__img}>&nbsp;</div>

                        <h4 className={styles.card__header}>Queen of Autumn</h4>

                        <p className={styles.card__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa!</p>

                    </div>

                    <div className={`${styles.menuSection__card} ${styles.menuSection__card3}`}>

                        <div className={styles.card__img}>&nbsp;</div>

                        <h4 className={styles.card__header}>Royal Liver Fried</h4>

                        <p className={styles.card__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa!</p>

                    </div>
                </div>

                <Link to='/menu' className={styles.menuSection__link}>view full menu</Link>

            </div>
        )
    }
}

export default MenuSection;
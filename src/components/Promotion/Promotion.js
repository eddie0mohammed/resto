
import React from 'react';

import styles from './Promotion.module.css';



class Promotion extends React.Component{

    render(){


        return (
            <div className={styles.promotion}>

                <p className={styles.promotion__news}>Our news</p>

                <h2 className={styles.promotion__heading}>Promotions & Events</h2>

                <div className={styles.promotion__gallery}>

                    <div className={styles.gallery__firstrow}>

                        <div className={styles.firstrow__cell1}>
                            {/* <img className={styles.img} src="https://source.unsplash.com/random" alt=""/> */}
                            <div className={styles.img}>&nbsp;</div>
                        </div>

                        <div className={styles.firstrow__cell2}>
                            <p className={styles.cell2__header}>Beef Sautced Onions - Let's Enjoy!</p>
                            <p className={styles.cell2__dotted}> ------</p>

                            <div className={styles.cell2__details}>
                                <p className={styles.details__text}>123 Broadway St, NY, United States</p>
                                <p className={styles.details__text}>10:00Am - 14:00Pm</p>
                                <p className={styles.details__text}>Monday, Sep, 25th 2019</p>
                            </div>

                        </div>

                        <div className={styles.firstrow__cell3}>
                            {/* <img className={styles.img} src="https://source.unsplash.com/random" alt=""/> */}
                            <div className={styles.img}>&nbsp;</div>

                        </div>

                    </div>

                    <div className={styles.gallery__secondrow}>

                        <div className={styles.secondrow__cell1}>
                            <p className={styles.cell2__header}>Become A Super Chef So Easy With Us</p>
                            <p className={styles.cell2__dotted}> ------</p>

                            <div className={styles.cell2__details}>
                                <p className={styles.details__text}>1600 Allen St, NY, United States</p>
                                <p className={styles.details__text}>16:00Pm - 18:00Pm</p>
                                <p className={styles.details__text}>Sunday, Oct, 26th 2019</p>
                            </div>

                        </div>

                        <div className={styles.secondrow__cell2}>
                            {/* <img className={styles.img} src="https://source.unsplash.com/random" alt=""/> */}
                            <div className={styles.img}>&nbsp;</div>
                            
                        </div>

                        <div className={styles.secondrow__cell3}>
                            <p className={styles.cell2__header}>Art Photography In Foody</p>
                            <p className={styles.cell2__dotted}> ------</p>

                            <div className={styles.cell2__details}>
                                <p className={styles.details__text}>580 Brooklyn St, NY, United States</p>
                                <p className={styles.details__text}>08:00Am - 10:30Am</p>
                                <p className={styles.details__text}>Thursday, Nov, 19th 2019</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Promotion;
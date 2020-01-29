
import React from 'react';

import styles from './ReviewTop.module.css';


class Review extends React.Component{


    render(){

        return (
            <div className={styles.review}>

                <div className={styles.overlay}>&nbsp;</div>

                <div className={styles.review__topSection}>
                    <h2 className={styles.review__quotes}>"</h2>
                    <h2 className={styles.review__testimony}>I Love Cooking For Myself And Cooking For My Family</h2>
                    <p className={styles.review__person}>- Al Roker -</p>

                </div>

            </div>
        )
    }
}

export default Review;
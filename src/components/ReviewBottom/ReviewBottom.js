
import React from 'react';

import styles from './ReviewBottom.module.css';

import chef from '../../img/chef.png'


class ReviewBottom extends React.Component{


    render(){

        return (
            <div className={styles.reviewBottom}>

                <div className={styles.reviewBottom__left}>
                    <img className={styles.chef} src={chef} alt="chef"/>
                </div>


                <div className={styles.reviewBottom__right}>
                    <p className={styles.review}>Review</p>

                    <h2 className={styles.heading}>The Food's Masters Say About Us</h2>

                    <p className={styles.testimonial}>"Best restaurant that i used to experience!"</p>

                    <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima amet totam natus laudantium, qui magnam asperiores ipsa veritatis molestiae aliquid!</p>

                    <p className={styles.person}><span className={styles.name}>Joe Bastianich</span> - Winner Master Chef 2016</p>

                    <div className={styles.arrows}>
                        <p className={styles.left}>&larr;</p>
                        <p className={styles.right}>&rarr;</p>
                    </div>

                </div>

            </div>
        )
    }
}

export default ReviewBottom;
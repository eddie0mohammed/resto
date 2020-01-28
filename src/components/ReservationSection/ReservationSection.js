
import React from 'react';

import styles from './ReservationSection.module.css';


class ReservationSection extends React.Component{


    render(){

        return (
            <div className={styles.reservationSection}>

                <div className={styles.left}>
                    <p className={styles.story}>Our story</p>
                    <h2 className={styles.header}>Cooking is the art of adjustment</h2>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse maiores, aliquam consequatur architecto quam mollitia id impedit eos, distinctio dolorum eligendi nesciunt illo aut doloribus ratione minima eius ea!</p>
                    
                    <p className={styles.who}><span className={styles.chef}>Thomas Eggsy</span> - Master Chef</p>

                    <p className={styles.reservation}>Reservation</p>
                </div>

                <div className={styles.right}>
                    <div className={styles.img}>x</div>
                    {/* <img className={styles.img} src="https://source.unsplash.com/random" alt="reservation"/> */}
                </div>

            </div>
        )
    }
}

export default ReservationSection;
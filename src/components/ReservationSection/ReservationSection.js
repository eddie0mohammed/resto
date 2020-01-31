
import React from 'react';

import styles from './ReservationSection.module.css';


class ReservationSection extends React.Component{


    render(){

        return (
            <div className={styles.reservationSection}>

                <div className={styles.left}>
                    <p className={styles.story}>Our story</p>
                    <h2 className={styles.header}>Cooking is the art of adjustment</h2>
                    <p className={styles.description}>Do right and far exceed expectations daily. We do the right thing and lead by putting people first. Each and every connection with our team, guests and shareholders is our opportunity to create an experience that FEEDs – Far Exceeds Expectations Daily – and show how much we care.</p>
                    
                    <p className={styles.who}><span className={styles.chef}>Thomas Eggsy</span> - Master Chef</p>

                    <button className={styles.reservation} onClick={this.props.showModal}>Reservation</button>
                </div>

                <div className={styles.right}>
                    <div className={styles.overlay}>&nbsp;</div>
                    <img className={styles.img} src="https://source.unsplash.com/jeiqzOgwwKU" alt="reservation"/>
                </div>

            </div>
        )
    }
}

export default ReservationSection;
import React from 'react';

import styles from './TopSection.module.css';




class TopSection extends React.Component{

    
    render(){

        return (
        
            <div className={styles.topSection}>
                <div className={styles.overlay}>&nbsp;</div>

                <div className={styles.firstBlock}>
                    <p className={styles.welcome}>{this.props.text.welcome}</p>
                    <h1 className={styles.mainHeader}>{this.props.text.heading1} <br/> {this.props.text.heading2}</h1>
                </div>

                <div className={styles.secondBlock}>
                    <p className={styles.book}>Book a table directly</p>
                    <p className={styles.phone}>(014)3236848</p>
                    <p className={styles.hours}>Opening hours: <span className={styles.days}>Mon - Fri</span>: 09:00 - 21:00 / <span className={styles.days}>Weekend</span>: 09:00 - 21:00 </p>


                </div>

            </div>
        
        )
    }
}

export default TopSection;
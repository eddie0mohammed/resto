
import React from 'react';

import styles from './Contact.module.css';


class Contact extends React.Component{


    render(){

        return (
            <React.Fragment>
            <div className={styles.contact}>

                <p className={styles.contact__contact}>Contact Us</p>

                <p className={styles.contact__header}>We Are Always Here To Help You</p>

                <div className={styles.contact__details}>

                    <div className={styles.details__left}>
                        <h2 className={styles.city}>Melbourne, <span className={styles.country}>Australia</span></h2>
                        <p className={styles.address}>269 King St, 5th Floor, Utah Building, Melbourne, VIC 3000, Australia</p>

                        <p className={styles.email}><span className={styles.email1}>Email</span>: info@restaurant.com</p>
                        <p className={styles.border}>&nbsp;</p>
                    </div>

                    <div className={styles.details__right}>

                        <p className={styles.call}>Call directly:</p>
                        <p className={styles.number}>+99 (0) 344 956 4050</p>

                        <p className={styles.lunch}>Lunch Service:</p>
                        <p className={styles.p1}>Friday, Saturday and Sunday:</p>
                        <p className={styles.p2}>Bookings: from 12pm - 1:30pm</p>

                        <p className={styles.dinner}>Dinner Service:</p>
                        <p className={styles.p3}>Daily: Bookings from 6pm - 9:30pm</p>

                    </div>
                </div>

            </div>
            <div className={styles.maps}>
                <iframe class={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1610504.290695561!2d143.93213755398625!3d-37.96508117696273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2smu!4v1580151894683!5m2!1sen!2smu" width="100%" height="100%" frameborder="0"  allowfullscreen=""></iframe>
            </div>
            </React.Fragment>
        )
    }
}

export default Contact;
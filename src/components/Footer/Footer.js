
import React from 'react';

import styles from './Footer.module.css';


class Footer extends React.Component{

    render(){

        return (
            <div className={styles.footer}>

                <div className={styles.footer__logo}>LOGO</div>

                <nav className={styles.footer__nav}>
                    <p className={styles.reservations}>Reservations</p>
                    <p className={styles.functions}>Functions</p>
                    <p className={styles.contact}>Contact</p>
                    <p className={styles.reviews}>Reviews & Media</p>
                    
                </nav>

                <div className={styles.footer__icons}>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-googleplus"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-rss"></ion-icon>
                </div>

                <p className={styles.copyright}>&copy; Al Restaurant 2020. Designed by MoEdun. All rights Reserved.</p>

            </div>
        )
    }
}

export default Footer;
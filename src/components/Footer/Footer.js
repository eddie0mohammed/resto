
import React from 'react';

import styles from './Footer.module.css';

import {Link } from 'react-router-dom';


class Footer extends React.Component{

    render(){

        return (
            <div className={styles.footer}>

                <div className={styles.footer__logo}><ion-icon name="restaurant"></ion-icon></div>

                <nav className={styles.footer__nav}>
                    <Link to="/" className={styles.home}>Home</Link>
                    <Link to='/about' className={styles.about}>About</Link>
                    <Link to='/menu' className={styles.menu}>Menu</Link>
                    
                    
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
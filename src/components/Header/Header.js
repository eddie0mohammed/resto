import React from 'react';

import styles from './Header.module.css';


class Header extends React.Component{

    render(){

        return (

            <div className={styles.header}>

                <h4>LOGO</h4>
                <nav className={styles.navbar}>
                    <p className={styles.navlinks}>Home</p>
                    <p className={styles.navlinks}>About</p>
                    <p className={styles.navlinks}>Menu</p>
                    <p className={styles.navlinks}>Gallery</p>
                    <p className={styles.navlinks}>Reservations</p>

                </nav>
            </div>
        )
    }
}

export default Header
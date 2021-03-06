import React from 'react';

import styles from './Header.module.css';

import {NavLink} from 'react-router-dom';


class Header extends React.Component{

    render(){

        return (

            <div className={styles.header}>

                <h4 className={styles.logo}><ion-icon name="restaurant"></ion-icon></h4>
                <nav className={styles.navbar}>
                    <NavLink to='/' exact activeClassName={styles.selected} className={styles.navlinks}>Home</NavLink>
                    <NavLink to="/about" exact activeClassName={styles.selected} className={styles.navlinks}>About</NavLink>
                    <NavLink to="/menu" exact  activeClassName={styles.selected} className={styles.navlinks}>Menu</NavLink>
                    

                </nav>
                <button className={styles.reservations} onClick={this.props.modalHandler}>Reservations</button>
            </div>
        )
    }
}

export default Header
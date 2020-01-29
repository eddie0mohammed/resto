
import React from 'react';

import styles from './About.module.css';


import Header from '../../components/Header/Header';
import TopSection from '../../components/TopSection/TopSection';
import Footer from '../../components/Footer/Footer';


class About extends React.Component{

    
    render(){

        const topSection = {
            welcome: 'About Us',
            heading1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, doloremque!',
            heading2: ''
        }

        return(
            <div className={styles.about}>

                <Header />

                <TopSection text={topSection}/>



                <Footer />
            </div>
        )
    }
}

export default About;
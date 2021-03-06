import React from 'react';

import styles from './Home.module.css';

import Header from '../../components/Header/Header';
import TopSection from '../../components/TopSection/TopSection';
import ReservationSection from '../../components/ReservationSection/ReservationSection';
import MenuSection from '../../components/MenuSection/MenuSection';
import ReviewTop from '../../components/ReviewTop/ReviewTop';
import ReviewBottom from '../../components/ReviewBottom/ReviewBottom';
import Promotion from '../../components/Promotion/Promotion';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';



class Home extends React.Component{


    render(){

        const topSection = {
            welcome: 'welcome',
            heading1: 'Tableau Bar Bistro',
            heading2: 'Restaurant'
        }

        return (
            <div className={styles.home}>

                <Header modalHandler={this.props.modalHandler}/>

                <TopSection text={topSection}/>

                <ReservationSection showModal={this.props.showModal}/>

                <MenuSection />

                <ReviewTop />

                <ReviewBottom />

                <Promotion />

                <Contact />

                <Footer />
            </div>
        )
    }
}

export default Home;
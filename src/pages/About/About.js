
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

                <Header modalHandler={this.props.modalHandler}/>

                <TopSection text={topSection}/>

                <div className={styles.philosophy}>
                    <h2 className={styles.philosophy__header}>Our Philosophy</h2>
                    <p className={styles.border}>&nbsp;</p>

                    <div className={styles.content}>

                    
                        <div className={styles.content__left}>
                            <div className={styles.left__img}></div>
                        </div>

                        <div className={styles.content__right}>
                            <p className={styles.right__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos accusamus hic reiciendis quis nulla iusto officia, alias neque eaque sunt ipsa esse, mollitia eligendi sit id? Eligendi illo quibusdam iusto quidem animi! Fugiat aut veniam quaerat ea quas expedita illum beatae architecto nihil eum? Temporibus ullam voluptates hic facilis.</p>
                            
                        </div>

                    </div>
                </div>

                <div className={styles.review}>

                    <div className={styles.overlay}>&nbsp;</div>

                    <div className={styles.review__topSection}>
                        <h2 className={styles.review__quotes}>
                            <ion-icon name="star" className={styles.stars}></ion-icon>
                            <ion-icon name="star" className={styles.stars}></ion-icon>
                            <ion-icon name="star" className={styles.stars}></ion-icon>
                            <ion-icon name="star" className={styles.stars}></ion-icon>
                            <ion-icon name="star" className={styles.stars}></ion-icon>
                        </h2>
                        <h2 className={styles.review__testimony}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nesciunt dolorem asperiores facilis eum! Repellendus enim in ea nulla iusto?</h2>
                        
                        <div className={styles.chef__img}>&nbsp;</div>
                        <p className={styles.chef__name}>Jason Bennet</p>

                    </div>

                </div>


                <Footer />
            </div>
        )
    }
}

export default About;
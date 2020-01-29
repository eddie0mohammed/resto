
import React from 'react';

import styles from './Menu.module.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


class Menu extends React.Component{

    
    render(){

        return(
            <div className={styles.menu}>

                <Header modalHandler={this.props.modalHandler}/>

                <div className={styles.topSection}>
                    <h2 className={styles.topSection__header}>Our Menu</h2>
                </div>

                {/* SIGNATURE */}
                <div className={styles.signature}>
                    <h2 className={styles.signature__header}>Signature Dishes</h2>
                    <p className={styles.border}>&nbsp;</p>


                    <div className={styles.dishes__container}>

                        <div className={styles.container__row}>

                            <div className={styles.dish__img}></div>

                            <div className={styles.dish__details}>
                                <h4 className={styles.details__header}>Imported Salmon Steak</h4>
                                <p className={styles.details__desc}>Salmon / Veggies / Oil</p>
                            </div>

                            <p  className={styles.dish__price}>$20</p>
                        </div>

                        <div className={styles.container__row}>

                            <div className={styles.dish__img}></div>

                            <div className={styles.dish__details}>
                                <h4 className={styles.details__header}>Imported Salmon Steak</h4>
                                <p className={styles.details__desc}>Salmon / Veggies / Oil</p>
                            </div>

                            <p  className={styles.dish__price}>$20</p>
                        </div>

                        <div className={styles.container__row}>

                            <div className={styles.dish__img}></div>

                            <div className={styles.dish__details}>
                                <h4 className={styles.details__header}>Imported Salmon Steak</h4>
                                <p className={styles.details__desc}>Salmon / Veggies / Oil</p>
                            </div>

                            <p  className={styles.dish__price}>$20</p>
                        </div>

                        <div className={styles.container__row}>

                            <div className={styles.dish__img}></div>

                            <div className={styles.dish__details}>
                                <h4 className={styles.details__header}>Imported Salmon Steak</h4>
                                <p className={styles.details__desc}>Salmon / Veggies / Oil</p>
                            </div>

                            <p  className={styles.dish__price}>$20</p>
                        </div>
                    </div>

                </div>


                {/* MAIN */}

                <div className={`${styles.signature} ${styles.maindishes}`} >
                    <div className={styles.overlay}></div>
                    <h2 className={styles.signature__header} style={{position: 'relative', zIndex: '3'}}>Main Dishes</h2>
                    <p className={styles.border} style={{background: 'white', zIndex: '3', position: 'relative'}}>&nbsp;</p>


                    <div className={styles.maindishes__container}>

                        <div className={styles.main__left}>

                            <div className={styles.row}>
                                <div className={styles.row__desc}>
                                    <h4 className={styles.row__header}>Imported Salmon Steak</h4>
                                    <p className={styles.row__content}>Salmon / Veggies / Oil</p>
                                </div>
                                <p className={styles.row__price}>$20</p>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.row__desc}>
                                    <h4 className={styles.row__header}>Imported Salmon Steak</h4>
                                    <p className={styles.row__content}>Salmon / Veggies / Oil</p>
                                </div>
                                <p className={styles.row__price}>$20</p>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.row__desc}>
                                    <h4 className={styles.row__header}>Imported Salmon Steak</h4>
                                    <p className={styles.row__content}>Salmon / Veggies / Oil</p>
                                </div>
                                <p className={styles.row__price}>$20</p>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.row__desc}>
                                    <h4 className={styles.row__header}>Imported Salmon Steak</h4>
                                    <p className={styles.row__content}>Salmon / Veggies / Oil</p>
                                </div>
                                <p className={styles.row__price}>$20</p>
                            </div>
                            

                        </div>

                        <div className={styles.main__right}>
                            <div className={styles.row}>
                                <div className={styles.row__desc}>
                                    <h4 className={styles.row__header}>Imported Salmon Steak</h4>
                                    <p className={styles.row__content}>Salmon / Veggies / Oil</p>
                                </div>
                                <p className={styles.row__price}>$20</p>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.row__desc}>
                                    <h4 className={styles.row__header}>Imported Salmon Steak</h4>
                                    <p className={styles.row__content}>Salmon / Veggies / Oil</p>
                                </div>
                                <p className={styles.row__price}>$20</p>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.row__desc}>
                                    <h4 className={styles.row__header}>Imported Salmon Steak</h4>
                                    <p className={styles.row__content}>Salmon / Veggies / Oil</p>
                                </div>
                                <p className={styles.row__price}>$20</p>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.row__desc}>
                                    <h4 className={styles.row__header}>Imported Salmon Steak</h4>
                                    <p className={styles.row__content}>Salmon / Veggies / Oil</p>
                                </div>
                                <p className={styles.row__price}>$20</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
                {/* SPECIAL */}
                <div className={styles.special}>
                        
                        <h2 className={styles.special__header}>Daily Specialities</h2>
                        <p className={styles.border}>&nbsp;</p>


                        <div className={styles.special__container}>

                            <div className={styles.special__row}>

                                <div className={styles.special__cell}>
                                    <div className={styles.cell__content}>
                                        <h4 className={styles.content__header}>Imported Salmon Steak</h4>
                                        <p className={styles.content__desc}>Salmon / Veggies / Oil</p>

                                        <p className={styles.content__price}>$20</p>
                                    </div>
                                </div>

                                <div className={styles.special__cell}>
                                    <div className={styles.cell__content}>
                                        <h4 className={styles.content__header}>Imported Salmon Steak</h4>
                                        <p className={styles.content__desc}>Salmon / Veggies / Oil</p>

                                        <p className={styles.content__price}>$20</p>
                                    </div>
                                </div>

                                <div className={styles.special__cell}>
                                    <div className={styles.cell__content}>
                                        
                                        <h4 className={styles.content__header}>Imported Salmon Steak</h4>
                                        <p className={styles.content__desc}>Salmon / Veggies / Oil</p>

                                        <p className={styles.content__price}>$20</p>
                                    </div>
                                </div>

                            </div>

                            {/* second row */}
                            <div className={styles.special__row}>

                                <div className={styles.special__cell}>
                                    <div className={styles.cell__content}>
                                        <h4 className={styles.content__header}>Imported Salmon Steak</h4>
                                        <p className={styles.content__desc}>Salmon / Veggies / Oil</p>

                                        <p className={styles.content__price}>$20</p>
                                    </div>
                                </div>

                                <div className={styles.special__cell}>
                                    <div className={styles.cell__content}>
                                        <h4 className={styles.content__header}>Imported Salmon Steak</h4>
                                        <p className={styles.content__desc}>Salmon / Veggies / Oil</p>

                                        <p className={styles.content__price}>$20</p>
                                    </div>
                                </div>

                                <div className={styles.special__cell}>
                                    <div className={styles.cell__content}>
                                        
                                        <h4 className={styles.content__header}>Imported Salmon Steak</h4>
                                        <p className={styles.content__desc}>Salmon / Veggies / Oil</p>

                                        <p className={styles.content__price}>$20</p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>


                    {/* last */}

                    <div className={styles.comments}>
                        
                        <h2 className={styles.comments__main}>Until i discovered cooking i was never really interested in anything</h2>

                        <p className={styles.comments__founder}>Our Founder John Phillipe</p>

                        <div className={styles.comments__img}></div>


                    </div>


                    <Footer />





            </div>
        )
    }
}

export default Menu;
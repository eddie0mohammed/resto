
import React from 'react';

import styles from './Menu.module.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import {menu} from './menuData';


class Menu extends React.Component{


    renderSignatureDishes = () => {
        const {signature } = menu;

        return signature.map((elem, i) => {
                
            return  (  
                    <div key={i} className={styles.container__row}>

                        <img className={styles.dish__img} src={elem.img} alt={elem.name}></img>

                        <div className={styles.dish__details}>
                            <h4 className={styles.details__header}>{elem.name}</h4>
                            <p className={styles.details__desc}>{elem.content}</p>
                        </div>

                        <p  className={styles.dish__price}>{elem.price}</p>
                    </div>
            )
    })}

    renderMainDishesLeft = () => {
        const {mainLeft} = menu;

        return mainLeft.map((elem, i) => {
            return (
                <div key={i} className={styles.row}>
                    <div className={styles.row__desc}>
                        <h4 className={styles.row__header}>{elem.name}</h4>
                        <p className={styles.row__content}>{elem.content}</p>
                    </div>
                    <p className={styles.row__price}>{elem.price}</p>
                </div>
            )
        })

    }
    renderMainDishesRight = () => {
        const {mainRight} = menu;

        return mainRight.map((elem, i) => {
            return (
                <div key={i} className={styles.row}>
                    <div className={styles.row__desc}>
                        <h4 className={styles.row__header}>{elem.name}</h4>
                        <p className={styles.row__content}>{elem.content}</p>
                    </div>
                    <p className={styles.row__price}>{elem.price}</p>
                </div>
            )
        })

    }

    renderDaily1 = () => {
        const {dailyRow1} = menu;

        return dailyRow1.map((elem, i) => {
            
            return (
                
                <div key={i} className={styles.special__cell} style={{backgroundImage: `url(${elem.img}`}}>
                    <div className={styles.cell__content}>
                        <h4 className={styles.content__header}>{elem.name}</h4>
                        <p className={styles.content__desc}>{elem.content}</p>

                        <p className={styles.content__price}>{elem.price}</p>
                    </div>
                </div>
            )
        })
    }

    renderDaily2 = () => {
        const {dailyRow2} = menu;

        return dailyRow2.map((elem, i) => {
            return (
                <div key={i} className={styles.special__cell} style={{backgroundImage: `url(${elem.img})`}}>
                    <div className={styles.cell__content}>
                        <h4 className={styles.content__header}>{elem.name}</h4>
                        <p className={styles.content__desc}>{elem.content}</p>

                        <p className={styles.content__price}>{elem.price}</p>
                    </div>
                </div>
            )
        })
    }
    
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
                        {this.renderSignatureDishes()}
                        
                    </div>

                </div>


                {/* MAIN */}

                <div className={`${styles.signature} ${styles.maindishes}`} >
                    <div className={styles.overlay}></div>
                    <h2 className={styles.signature__header} style={{position: 'relative', zIndex: '3'}}>Main Dishes</h2>
                    <p className={styles.border} style={{background: 'white', zIndex: '3', position: 'relative'}}>&nbsp;</p>


                    <div className={styles.maindishes__container}>

                        <div className={styles.main__left}>

                            {this.renderMainDishesLeft()}

                        </div>

                        <div className={styles.main__right}>
                            {this.renderMainDishesRight()}
                        </div>
                        
                    </div>

                </div>


                {/* SPECIAL */}
                <div className={styles.special}>
                        
                        <h2 className={styles.special__header}>Daily Specialities</h2>
                        <p className={styles.border}>&nbsp;</p>


                        <div className={styles.special__container}>

                            <div className={styles.special__row}>

                                {this.renderDaily1()}
                            </div>

                            {/* second row */}
                            <div className={styles.special__row}>

                                {this.renderDaily2()}

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
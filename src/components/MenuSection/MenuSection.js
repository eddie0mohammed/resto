
import React from 'react';

import styles from './MenuSection.module.css';

import {Link} from 'react-router-dom';

import {menu} from './menuData';


class MenuSection extends React.Component{

    state = {
        data: menu,
        count: 0
    }

    onIncrement = () => {
        let max = this.state.data.length - 1;
        let currentCount = this.state.count;

        if (currentCount + 1 > max){
            currentCount = 0;
        }else{
            currentCount++;
        }
        this.setState({
            count: currentCount
        });
    }

    onDecrement = () => {
        let max = this.state.data.length - 1;
        let currentCount = this.state.count;

        if (currentCount - 1 < 0){
            currentCount = max;
        }else{
            currentCount--;
        }
        this.setState({
            count: currentCount
        });
    }

    renderCards = () => {
        let currentSet = this.state.data.filter((elem, i) => i === this.state.count)[0];
        
        return currentSet.map(elem => {
            return  (
                <React.Fragment key={elem.header}>
                    <div className={`${styles.menuSection__card}`}>

                        <div className={styles.card__imgContainer}>
                            <img className={styles.card__img} src={elem.img} alt={elem.header}/>

                            <p className={styles.price}>{elem.price}</p>

                        </div>

                        <div className={styles.innercard__right}>
                            <h4 className={styles.card__header}>{elem.header}</h4>

                            <p className={styles.card__desc}>{elem.body}</p>
                        </div>

                    </div>

                    
                </React.Fragment>
                    )
        })
    }

    render(){

        // console.log(this.state.count);
        
        return (
            <div className={styles.menuSection}>
                
                <p className={styles.menuSection__special}>Special Menu</p>
                <h4 className={styles.menuSection__header}>Delicious Flavour of Autumn</h4>

                <div className={styles.menuSection__cardContainer}>

                    <div className={styles.arrow__container}>
                       <p className={styles.arrow__left} onClick={this.onDecrement}>&larr;</p>
                    </div>

                    {this.renderCards()}

                    <div className={styles.arrow__container}>
                        <p className={styles.arrow__right} onClick={this.onIncrement}>&rarr;</p>
                    </div>
                </div>

                <Link to='/menu' className={styles.menuSection__link}>view full menu</Link>

            </div>
        )
    }
}

export default MenuSection;
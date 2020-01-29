
import React from 'react';

import styles from './ReviewBottom.module.css';

import chef from '../../img/chef.png'

import {data} from './reviewData';


class ReviewBottom extends React.Component{

    state = {
        data : data,
        count: 0
    }
    
    onIncrement = () => {
        const max = this.state.data.length - 1;
        let currentCount = this.state.count;
        if (currentCount + 1 > max){
            currentCount = 0;
        }else{
            currentCount++;
        }
        this.setState({
            count: currentCount
        })
    }

    onDecrement = () => {
        const max = this.state.data.length - 1;
        let currentCount = this.state.count;
        if (currentCount - 1 < 0){
            currentCount = max;
        }else{
            currentCount--;
        }
        this.setState({
            count: currentCount
        })
    }
    

    renderData = () => {
        // let count = 0;

        let currentData = this.state.data.filter((elem , i) => i === this.state.count)[0];
        // console.log(currentData);
        
        const {heading1, heading2, review, comment, person, from} = currentData;

        return (
            <React.Fragment>
                <h2 className={styles.heading}>{heading1} <br/> {heading2}</h2>

                <p className={styles.testimonial}>"{review}"</p>

                <p className={styles.description}>{comment}</p>

                <p className={styles.person}><span className={styles.name}>{person}</span> - {from}</p>
            </React.Fragment>
        )
    }
 
    render(){
    
        return (
            <div className={styles.reviewBottom}>
                <div className={styles.reviewBottom__left}>
                    <img className={styles.chef} src={chef} alt="chef"/>
                </div>


                <div className={styles.reviewBottom__right}>
                    <p className={styles.review}>Review</p>
                    
                    {this.renderData()}
                    

                    <div className={styles.arrows}>
                        <p className={styles.left} onClick={this.onIncrement}>&larr;</p>
                        <p className={styles.right} onClick={this.onDecrement}>&rarr;</p>
                    </div>

                </div>

            </div>
        )
    }
}

export default ReviewBottom;
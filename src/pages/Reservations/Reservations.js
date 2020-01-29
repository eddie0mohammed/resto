
import React from 'react';

import styles from './Reservations.module.css';

import {withRouter} from 'react-router-dom';

class Reservations extends React.Component{


    state ={
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        seats: '',
        request: ''


    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.resetState();
        this.props.hide();
        this.props.history.push('/');
    }

    resetState = () => {
        this.setState({
            name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        seats: '',
        request: ''   
        })
    }
    
    render(){

        return(
            <div className={styles.reservations}>

                <div className={styles.cross} onClick={this.props.hide}>X</div>
                
                <h2 className={styles.reservations__header}>Reservations</h2>
                <p className={styles.border}>*&nbsp;</p>

                <form className={styles.reservations__form} onSubmit={this.handleSubmit}>

                    <div className={styles.first}>
                        <div className={styles.cell}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input type="text" name="name" required className={styles.input} autoComplete='off' onChange={this.handleChange} value={this.state.name}/>
                        </div>

                        <div className={styles.cell}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input type="text" name="email" required className={styles.input} autoComplete='off' onChange={this.handleChange} value={this.state.email}/>
                        </div>

                        <div className={styles.cell}>
                            <label className={styles.label} htmlFor="phone">Phone</label>
                            <input type="text" name="phone" required className={styles.input} autoComplete='off' onChange={this.handleChange} value={this.state.phone}/>
                        </div>
                        
                    </div>

                    <div className={styles.second}>
                        <div className={styles.cell}>
                            <label className={styles.label} htmlFor="date">Date</label>
                            <input type="text" name="date" required className={styles.input} autoComplete='off' onChange={this.handleChange} value={this.state.date}/>
                        </div>

                        <div className={styles.cell}>
                            <label className={styles.label} htmlFor="time">Time</label>
                            <input type="text" name="time" required className={styles.input} autoComplete='off' onChange={this.handleChange} value={this.state.time}/>
                        </div>

                        <div className={styles.cell}>
                            <label className={styles.label} htmlFor="seats">Seats</label>
                            <input type="text" name="seats" required className={styles.input} autoComplete='off' onChange={this.handleChange} value={this.state.seats}/>
                        </div>
                        
                    </div>

                    <div className={styles.third}>
                        <label className={styles.label} htmlFor="request">Special Requests</label>
                        <textarea type="text" name="request" required className={styles.textarea} onChange={this.handleChange} value={this.state.request}/>
                    </div>

                    <div className={styles.btn__container}>
                        <button className={styles.submit}>Book now</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Reservations);
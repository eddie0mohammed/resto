import React from 'react';

import styles from './Maps.module.css';


class Maps extends React.Component{


    render(){

        return (
            <div className={styles.maps}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1610504.290695561!2d143.93213755398625!3d-37.96508117696273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2smu!4v1580151894683!5m2!1sen!2smu" width="100%" height="100%" frameborder="0"  allowfullscreen=""></iframe>
            </div>
        )
    }
}

export default Maps;
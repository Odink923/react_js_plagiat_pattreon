import React, {useState} from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {



    return (
        <button {...props} style={{cursor: "pointer"}}   className={classes.myBtn} >
            {children}
        </button>
    );
};

export default MyButton;
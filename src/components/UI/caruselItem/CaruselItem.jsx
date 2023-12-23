import React from 'react';
import classes from './CaruselItem.module.css'
const CaruselItem = ({children}) => {
    return (
        <div className={classes.caruselItem}>
            {children}
        </div>
    );
};

export default CaruselItem;
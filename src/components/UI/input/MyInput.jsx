import React from 'react';
import classes from './MyInput.module.css';
const MyInput = React.forwardRef((props, ref) => {
    const { icon, ...rest } = props;
    return (
        <div className={classes.inputContainer}>
                {icon && <span style={{paddingLeft:5}} className={classes.icon}>{icon}</span>}
                    <input ref={ref} className={classes.mySearch} {...rest} />
        </div>

    );
});

export default MyInput;
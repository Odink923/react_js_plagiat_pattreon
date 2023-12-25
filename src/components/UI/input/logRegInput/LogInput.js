import React from 'react';
import MyInput from "../MyInput";

const LogInput = ({children, lol}) => {
    const searchIcon = (
        children

    );
    return <MyInput  placeholder={lol} style={{paddingLeft: "76px",width:"426px"}} icon={searchIcon}/>;
};

export default LogInput;
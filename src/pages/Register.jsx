import React from 'react';
import LogInput from "../components/UI/input/logRegInput/LogInput";

const Register = () => {
    return (
        <div className="log">

            <div className="loginReg">
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{fontSize:"40px",marginTop:"20px",marginBottom:"25px"}}>Registration</div>
                    <div>
                        <LogInput lol="Username">
                            <svg width="52" height="65" viewBox="0 0 52 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="51" y1="4.37114e-08" x2="51" y2="65" stroke="#C9F4AA" stroke-width="2"/>
                                <path d="M2.5 47C2.5 47 0 47 0 44.5C0 42 2.5 34.5 15 34.5C27.5 34.5 30 42 30 44.5C30 47 27.5 47 27.5 47H2.5Z" fill="#3A3A3A"/>
                                <path d="M15 32C19.1421 32 22.5 28.6421 22.5 24.5C22.5 20.3579 19.1421 17 15 17C10.8579 17 7.5 20.3579 7.5 24.5C7.5 28.6421 10.8579 32 15 32Z" fill="#3A3A3A"/>
                            </svg>

                        </LogInput>
                    </div>
                    <div style={{marginTop:"15px"}}>
                        <LogInput  lol="Email">
                            <svg width="52" height="65" viewBox="0 0 52 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.0929726 23.6665C0.471994 21.9966 1.96542 20.75 3.75 20.75H26.25C28.0346 20.75 29.528 21.9966 29.907 23.6665L15 32.7763L0.0929726 23.6665ZM0 25.807V39.1261L10.881 32.4565L0 25.807ZM12.6776 33.5545L0.359758 41.1048C0.961133 42.373 2.25315 43.25 3.75 43.25H26.25C27.7469 43.25 29.0389 42.373 29.6402 41.1048L17.3224 33.5545L15 34.9737L12.6776 33.5545ZM19.119 32.4565L30 39.1261V25.807L19.119 32.4565Z" fill="#3A3A3A"/>
                                <line x1="51" y1="4.37114e-08" x2="51" y2="65" stroke="#C9F4AA" stroke-width="2"/>
                            </svg>



                        </LogInput>
                    </div>
                    <div style={{marginTop:"15px"}}>
                        <LogInput  lol="Password">
                            <svg width="52" height="65" viewBox="0 0 52 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="51" y1="4.37114e-08" x2="51" y2="65" stroke="#C9F4AA" stroke-width="2"/>
                                <path d="M15 18.875C17.0711 18.875 18.75 20.5539 18.75 22.625V30.125H11.25V22.625C11.25 20.5539 12.9289 18.875 15 18.875ZM20.625 30.125V22.625C20.625 19.5184 18.1066 17 15 17C11.8934 17 9.375 19.5184 9.375 22.625V30.125C7.30393 30.125 5.625 31.8039 5.625 33.875V43.25C5.625 45.3211 7.30393 47 9.375 47H20.625C22.6961 47 24.375 45.3211 24.375 43.25V33.875C24.375 31.8039 22.6961 30.125 20.625 30.125Z" fill="#3A3A3A"/>
                            </svg>


                        </LogInput>
                    </div>
                    <button className="loginButon">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
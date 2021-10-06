import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Input, Button, Slide, Fade } from '@mui/material';

import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import styles from './authentication.style';


const Authentication = () => {
    // const styles = useStyles();

    const leftRef = useRef(null);
    const rightRef = useRef(null);

    console.log('right Ref: ', rightRef);
    const [state, setState] = useState(false);

    return (
        <div style={styles.main}>
            <div style={styles.container}

            >
                <SignInForm
                    references={leftRef}
                />

                <SignUpForm
                    references={rightRef}
                />

                <Slide
                    appear={false}
                    direction="right"
                    in={!state}
                    container={rightRef.current}
                    timeout={500}
                >
                    <div style={styles.overlayRight}>
                        <h1>Welcome To TechNow</h1>
                        <p>Fill in some personal details and start shopping with us</p>
                        <Button
                            onClick={() => setState(!state)}
                            sx={styles.overlayButton} variant="outlined">Sign Up</Button>
                    </div>
                </Slide>

                <Fade
                    in={state}
                    timeout={550}
                >
                    <div style={styles.overlayLeft}>
                        <h1>Abcxyz</h1>
                        <p>Kcjasdads</p>
                        <Button
                            onClick={() => setState(!state)}
                            sx={styles.overlayButton} variant="outlined">Sign In</Button>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Authentication

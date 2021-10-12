import React from 'react'
import useStyles from './Footer.style';
import { Container } from '@mui/material'

const Footer = () => {
    const styles = useStyles();

    return (
        <div className={styles.footer}>
            <Container maxwidth="xl">
                <h1>Footer</h1>
            </Container>
        </div>
    )
}

export default Footer

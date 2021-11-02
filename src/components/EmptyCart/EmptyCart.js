import { Typography, Box, CardMedia, Button } from "@mui/material";
import React from "react";

import huhu from "../../img/empty-cart.png"
import styles from "./EmptyCart.style"
import { useHistory } from "react-router";

const EmptyCart = () => {

    const history = useHistory();
    return (
        <Box sx={styles.main}>
            <CardMedia
                sx={styles.image}
                image={huhu} alt="logo" />
            <Button
                onClick={() => history.push("/")}
                variant="contained"
                sx={styles.button}
            >
                Continue Shopping
            </Button>
        </Box>
    )
}

export default EmptyCart;
import { Typography, Box, CardMedia, Button } from "@mui/material";
import React from "react";


import styles from "./EmptyList.style"
import { useHistory } from "react-router";

const EmptyList = ({ img, title, imgHeight, btnMarginTop, isCart }) => {

    const history = useHistory();
    return (
        <Box sx={styles.main}>
            <CardMedia
                sx={{ ...styles.image, ...{ height: imgHeight } }}
                image={img} alt="logo" />
            <Typography sx={styles.title}>{title}</Typography>
            {
                isCart &&
                <Button
                    onClick={() => history.push("/")}
                    variant="contained"
                    sx={{ ...styles.button, ...{ marginTop: btnMarginTop } }}
                >
                    Continue Shopping
                </Button>
            }
        </Box>
    )
}

export default EmptyList;
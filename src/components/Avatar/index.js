import React from 'react'

import styles from "./Avatar.style"
import { Box, style } from "@mui/system";
import { Typography, Container, Button } from "@mui/material";

const AvatarProfile = () => {
    return (
        <Button
            sx={styles.avatarBox}
        >
            <img
                src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                width={"100%"}
                height={"100%"}
            />
        </Button>
    )
}

export default AvatarProfile;
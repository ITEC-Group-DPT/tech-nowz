import { Typography, Modal, Button, Fade } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
import styles from "./Modal.style"
const CustomModal = ({
    openModal,
    setOpenModal,
    title,
    description,
    onPressConfirm,
    onPressCancel,
    cancelText = "Cancel",
    confirmText = "Confirm",
}) => {

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <Modal
            disableScrollLock
            open={openModal}
            onClose={closeModal}
        >
            <Fade
            in = {openModal}
            timeout = {350}
            >
                <Box sx={styles.main}>
                    {
                        title &&
                        <Typography
                            sx={styles.title}
                        >
                            {title}
                        </Typography>
                    }
                    <Typography sx={styles.description}>
                        {description}
                    </Typography>

                    <Box sx={styles.buttonView}>
                        <Button
                            variant="outlined"
                            sx={styles.cancelButton}
                            onClick={() => {
                                onPressCancel
                                    ? onPressCancel()
                                    : closeModal();
                            }}
                        >
                            Cancel
                        </Button>

                        <Button
                            variant="contained"
                            sx={styles.confirmButton}
                            onClick={() => {
                                onPressConfirm();
                                closeModal();
                            }}
                        >
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}

export default CustomModal;
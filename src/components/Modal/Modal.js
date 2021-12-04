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
    outlinedConfirm,

    noConfirm,
    noCancel,
    cancelText = "Cancel",
    confirmText = "Confirm",
}) => {


    const closeModal = () => {
        if (onPressCancel)
            onPressCancel();
        else setOpenModal(false);
    }

    return (
        <Modal
            disableScrollLock
            open={openModal}
            onClose={closeModal}
        >
            <Fade
                in={openModal}
                timeout={350}
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
                        {
                            !noCancel &&
                            <Button
                                variant="outlined"
                                sx={styles.cancelButton}
                                onClick={closeModal}
                            >
                                {cancelText}
                            </Button>
                        }
                        {
                            !noConfirm &&
                            <Button
                                variant={outlinedConfirm ? "outlined" : "contained"}
                                sx={!outlinedConfirm
                                    ? styles.confirmButton
                                    : styles.outlineButton
                                }
                                onClick={() => {
                                    onPressConfirm && onPressConfirm();
                                    closeModal();
                                }}
                            >
                                {confirmText}
                            </Button>
                        }
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}

export default CustomModal;
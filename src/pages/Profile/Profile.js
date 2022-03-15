import { React, useState, useRef, useEffect } from 'react'

import { changeUsername } from "../../store/actions/authAction"
import { userInfoSelector } from "../../store/selectors"

import { useSelector, useDispatch } from 'react-redux';

import styles from "./Profile.style"
import { Box } from "@mui/system";

import { Typography, Container, Button, Dialog, Input, DialogTitle } from "@mui/material";


import ChangePWModal from '../../components/ChangePWModal/ChangePWModal';

import Avatar from "../../components/Avatar"

const Profile = () => {

    const dispatch = useDispatch();

    const [modelAppear, setModalAppear] = useState(false)
    const [isChangeUsername, setIsChangeUsername] = useState(false)

    const [curUsername, setCurrentUsername] = useState();


    const { username } = useSelector(userInfoSelector)


    const saveUsername = () => {
        setIsChangeUsername(false);
        dispatch(changeUsername(curUsername));
    }

    return (
        <Box sx={styles.box}>
            <Box sx={styles.main}>
                <Box sx={styles.avatarWrapper}>
                    <Avatar />
                </Box>

                <Box sx={{
                    marginBottom: "24px",
                }}>
                    <Input
                        inputProps={{ style: { textAlign: "center" } }}
                        onChange={(e) => setCurrentUsername(e.target.value)}
                        style={{
                            marginLeft: isChangeUsername ? 32 : 0,
                            maxWidth: "100px",
                            fontWeight: "bold",
                            marginTop: 8,
                            fontSize: 25,
                        }}
                        autoFocus
                        readOnly={!isChangeUsername}
                        disableUnderline={!isChangeUsername}
                        value={isChangeUsername ? curUsername : username}
                    />
                    {
                        isChangeUsername &&
                        <button
                            style={{
                                marginLeft: 14,
                                padding: 0,
                                border: 0,
                                background: "rgb(245,245,245)",
                                cursor: "pointer",
                            }}
                            onClick={saveUsername}
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/443/443138.png"
                                width={18}
                                height={18}
                            />
                        </button>
                    }
                </Box>

                <Box sx={styles.btwWrapper}>
                    <Button
                        sx={styles.editBtn}
                        variant="outlined"
                        onClick={() => {
                            if (isChangeUsername == false) {
                                setCurrentUsername(username)
                            }
                            setIsChangeUsername(!isChangeUsername)
                        }}
                    >
                        Edit Profile
                    </Button>

                    <Button
                        sx={styles.changeBtn}
                        variant="outlined"
                        onClick={() => setModalAppear(true)}
                    >
                        Change Password
                    </Button>
                </Box>
            </Box>

            <Dialog
                open={modelAppear}
                onClose={() => setModalAppear(false)}
            >
                <DialogTitle sx={{ textAlign: "center" }}>Change Password</DialogTitle>
                <ChangePWModal
                    setAppear={setModalAppear}
                />
            </Dialog>
        </Box>
    )
}

export default Profile;
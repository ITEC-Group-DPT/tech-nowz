import React, { useState, useRef } from "react"
import styles from "../../pages/Authentication/authentication.style"
import { Link, useHistory } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton';
import { Input, Button, Typography, CircularProgress, IconButton, InputAdornment, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from "react-redux"
import { Login, removeEmailError, removePasswordError } from "../../store/actions/authAction"
import { authErrorSelector, authIsLoadingSelector } from '../../store/selectors'
import { icons } from "../../constant"

const SignInForm = ({ isSignIn, setIsSignIn, references }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    //const inputRef = useRef()
    const minWidth = useMediaQuery('(min-width:900px)')
    const isHide = !minWidth && !isSignIn
    const authErrors = useSelector(authErrorSelector)
    const isLoading = useSelector(authIsLoadingSelector)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState({
        value: "",
        showPassword: false,
    })

    const loginSubmit = () => {
        dispatch(Login(email, password.value, history))
    }

    const isRedBorder = (type) => ({
        border: type ? ("1px red solid") : ("none"),
    })

    const onClickEmail = () => {
        if (authErrors.email)
            dispatch(removeEmailError())
    }

    const onClickPassword = () => {
        if (authErrors.password)
            dispatch(removePasswordError())
    }

    const handleChange = (prop) => (event) => {
        setPassword({ ...password, [prop]: event.target.value })
    }

    const handleClickShowPassword = () => {
        setPassword({
            ...password,
            showPassword: !password.showPassword,
        })
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    if (isHide) return <></>;
    return (
        <Box sx={styles.formContainerLeft} ref={references}>
            <Box sx={{ width: "100%" }}>
                <Typography sx={styles.title}>Sign in</Typography>
                <Box component="div" sx={styles.socialContainer}>
                    <Link to="#" style={styles.socialLink}><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#" style={styles.socialLink}><i className="fab fa-google-plus-g"></i></Link>
                    <Link to="#" style={styles.socialLink}><i className="fab fa-linkedin-in"></i></Link>
                </Box>
                <Typography component="div" sx={styles.subTitle}>or use your TechNow account</Typography>

                <Input
                    sx={{ ...styles.input, ...isRedBorder(authErrors.email) }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={onClickEmail}
                    type="email"
                    placeholder="Email"
                    disableUnderline
                    fullWidth
                />
                <Typography component="div" sx={styles.errorMsg}>{authErrors.email}</Typography>

                <Input
                    sx={{ ...styles.input, ...isRedBorder(authErrors.password) }}
                    value={password.value}
                    onChange={handleChange('value')}
                    onClick={onClickPassword}
                    type={password.showPassword ? 'text' : 'password'}
                    //inputRef={inputRef}
                    placeholder="Password"
                    disableUnderline
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {password.showPassword ? <icons.HideIcon style={styles.showPWIcon} /> : <icons.ShowIcon style={styles.showPWIcon} />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Typography sx={styles.errorMsg}>{authErrors.password}</Typography>

                {
                    (isSignIn && !minWidth) &&
                    <Button onClick={() => setIsSignIn(false)}
                        sx={styles.switch}>Don't have an account? Sign up
                    </Button>
                }
                <Box sx={styles.centerBox}>
                    <Link style={styles.back} to="/"><i className="bi bi-arrow-left"></i>&nbsp; Back to home</Link>
                </Box>
                <Box sx={styles.centerBox}>
                    <LoadingButton
                        onClick={loginSubmit}
                        sx={styles.mainButton}
                        variant="contained"
                        loading={isLoading}
                        loadingIndicator={<CircularProgress sx={styles.loadingIndicator} size={18} />}
                    >Sign In
                    </LoadingButton>
                </Box>
            </Box>
        </Box>
    )
}

export default SignInForm;
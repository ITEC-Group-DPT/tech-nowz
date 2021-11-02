import React, { useState, useEffect, useRef } from "react";
import styles from "../../pages/Authentication/authentication.style"
import { Link, useHistory } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { Input, Button, Typography, useMediaQuery, InputAdornment, IconButton, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from "react-redux"
import { signUp, removeEmailSignUpError } from "../../store/actions/authAction"
import { authErrorSelector, authIsLoadingSelector } from '../../store/selectors'
import validator from 'validator'
import { icons } from "../../constant"

const SignUpForm = ({ isSignIn, setIsSignIn, references }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const authErrors = useSelector(authErrorSelector)
    const isLoading = useSelector(authIsLoadingSelector)

    const minWidth = useMediaQuery('(min-width:900px)');
    const isHide = (!minWidth && isSignIn);

    const [email, setEmail] = useState({
        value: "",
        error: undefined,
    })
    const [username, setUsername] = useState({
        value: "",
        error: undefined,
    })
    const [password1, setPassword1] = useState({
        value: "",
        error: undefined,
        showPassword: false,
    })
    const [password2, setPassword2] = useState({
        value: "",
        error: undefined,
        showPassword: false,
    })

    useEffect(() => {
        setEmail({ ...email, error: authErrors.emailSignUp })
    }, [authErrors.emailSignUp])

    const checkInputs = () => {
        let error = true
        if (validator.isEmail(email.value) === false) {
            setEmail({ ...email, error: "Email is invalid" })
            error = false
        }
        if (checkStrLength(username.value, 5, 20) === false) {
            setUsername({ ...username, error: "Username must be between 5 and 20 characters" })
            error = false
        }
        if (checkStrLength(password1.value, 6, 25) === false) {
            setPassword1({ ...password1, error: "Password must be between 6 and 25 characters" })
            error = false
        }
        if (checkMatchPasswords(password1.value, password2.value) === false) {
            setPassword2({ ...password2, error: "Passwords don't match" })
            error = false
        }
        return error
    }
    const signUpSubmit = () => {
        if (checkInputs())
            dispatch(signUp(email.value, username.value, password2.value, history))
    }

    const checkStrLength = (str, start, end) => {
        if (str.length >= start && str.length <= end) return true
        else return false
    }

    const checkMatchPasswords = (password1, password2) => {
        if (password1 === password2) return true
        else return false
    }

    const isRedBorder = (type) => ({
        border: type ? ("1px red solid") : ("none"),
        borderRadius: '10px',
    })

    const removeEmailError = () => {
        if (authErrors.emailSignUp)
            dispatch(removeEmailSignUpError())
        else if (email.error)
            setEmail({ ...email, error: undefined })
    }

    const removeUsernameError = () => {
        if (username.error)
            setUsername({ ...username, error: undefined })
    }

    const removePassword1Error = () => {
        if (password1.error)
            setPassword1({ ...password1, error: undefined })
    }

    const removePassword2Error = () => {
        if (password2.error)
            setPassword2({ ...password2, error: undefined })
    }

    const handleClickShowPassword1 = () => {
        setPassword1({
            ...password1,
            showPassword: !password1.showPassword,
        })
    }

    const handleClickShowPassword2 = () => {
        setPassword2({
            ...password2,
            showPassword: !password2.showPassword,
        })
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			signUpSubmit()
		}
	}

    if (isHide) return <></>;

    return (
        <Box sx={styles.formContainerRight} ref={references}>
            <Box sx={{ width: "100%" }}>
                <Typography sx={styles.title}>Create Account
                </Typography>
                <Box component="div" style={styles.socialContainer}>
                    <Link to="#" style={styles.socialLink}><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#" style={styles.socialLink}><i className="fab fa-google-plus-g"></i></Link>
                    <Link to="#" style={styles.socialLink}><i className="fab fa-linkedin-in"></i></Link>
                </Box>
                <Typography component="div" sx={styles.subTitle}>or use your email for registration
                </Typography>

                <Input
                    sx={isRedBorder(email.error)}
                    value={email.value}
                    onChange={(e) => setEmail({ ...email, value: e.target.value })}
                    onClick={removeEmailError}
                    onKeyDown={handleKeyDown}
                    type="email"
                    name="email"
                    placeholder="Email"
                    disableUnderline
                    fullWidth
                    inputProps={{ style: styles.input }}
                />
                <Typography component="div" sx={styles.errorMsg}>{email.error}</Typography>

                <Input
                    sx={isRedBorder(username.error)}
                    value={username.value}
                    onChange={(e) => setUsername({ ...username, value: e.target.value })}
                    onClick={removeUsernameError}
                    onKeyDown={handleKeyDown}
                    type="text"
                    name="username"
                    placeholder="Username"
                    disableUnderline
                    fullWidth
                    inputProps={{ style: styles.input }}
                />
                <Typography component="div" sx={styles.errorMsg}>{username.error}</Typography>

                <Input
                    sx={{ ...styles.input, ...isRedBorder(password1.error) }}
                    value={password1.value}
                    onChange={(e) => setPassword1({ ...password1, value: e.target.value })}
                    onClick={removePassword1Error}
                    onKeyDown={handleKeyDown}
                    type={password1.showPassword ? 'text' : 'password'}
                    //inputRef={inputRef}
                    placeholder="Password"
                    disableUnderline
                    fullWidth
                    inputProps={{ style: { padding: 0 } }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword1}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {password1.showPassword ? <icons.HideIcon style={styles.showPWIcon} /> : <icons.ShowIcon style={styles.showPWIcon} />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Typography sx={styles.errorMsg}>{password1.error}</Typography>

                <Input
                    sx={{ ...styles.input, ...isRedBorder(password2.error) }}
                    value={password2.value}
                    onChange={(e) => setPassword2({ ...password2, value: e.target.value })}
                    onClick={removePassword2Error}
                    onKeyDown={handleKeyDown}

                    type={password2.showPassword ? 'text' : 'password'}
                    //inputRef={inputRef}
                    placeholder="Confirm password"
                    disableUnderline
                    fullWidth
                    inputProps={{ style: { padding: 0 } }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword2}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {password2.showPassword ? <icons.HideIcon style={styles.showPWIcon} /> : <icons.ShowIcon style={styles.showPWIcon} />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Typography sx={styles.errorMsg}>{password2.error}</Typography>

                {
                    (!isSignIn && !minWidth) &&
                    <Button onClick={() => setIsSignIn(true)}
                        sx={styles.switch}>
                        Already have an account? Sign in
                    </Button>
                }
                <Box sx={styles.centerBox}>
                    <Link style={styles.back} to="/"><i className="bi bi-arrow-left"></i>&nbsp; Back to home</Link>
                </Box>
                <Box sx={styles.centerBox}>
                    <LoadingButton
                        onClick={signUpSubmit}
                        sx={styles.mainButton}
                        variant="contained"
                        loading={isLoading}
                        loadingIndicator={<CircularProgress sx={styles.loadingIndicator} size={18} />}
                    >Sign Up
                    </LoadingButton>
                </Box>
            </Box>
        </Box>
    )
}

export default SignUpForm;

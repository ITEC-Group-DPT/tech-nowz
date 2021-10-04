import { makeStyles } from '@mui/styles';
import { colors } from '../../constant';

const useStyles = makeStyles({
    footer: {
        textAlign: 'center !important',
        marginTop: '3rem !important',
        width: '100% !important',
        backgroundColor: colors.primary,
        color: 'white',
        padding: '2rem',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2.5rem',

    },
    socialMedia: {
        display: 'flex',
    },
    newsletter: {
        display: 'flex',
        alignItems: 'center',
    },

    textField: {
        marginRight: '1.5rem',
        color: 'white',
        "& .Mui-focused": {
            color: "white",
        },
        "& .MuiFormLabel-root": {
            color: "white",
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
    },

    icon: {
        fontSize: '2rem',
        marginRight: '1.5rem',
    },
    signUp: {
        marginRight: '1.5rem',
    },
    subscribeBtn : {
        color: 'white',
        border: 'solid 1px #FFFFFF',
        "&:hover": {
            border: 'solid 1px #FFFFFF',
        },
    },
    address : {

    },
});

export default useStyles;
import { colors } from '../../constant';

const styles = {
    footer: {
        backgroundColor: colors.primary,
        color: 'white',
        padding: '2rem',
    },

    addressWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1.5rem',
    },

    socialMedia: {
        display: 'flex',
    },

    newsletter: {
        display: 'flex',
        alignItems: 'end',
    },

    textField: {
        width: '100%',
        color: 'white',
        "& .Mui-focused": {
            color: "white !important",
        },
        "& .MuiFormLabel-root": {
            color: "white",
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: 'white !important',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
    },

    btnWrapper : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        fontSize: '2rem',
    },

    signUp: {
        fontSize: '1rem',
        textAlign: 'center',
    },

    subscribeBtn : {
        color: 'white',
        border: 'solid 1px #FFFFFF',
        textTransform: 'none',
        "&:hover": {
            border: 'solid 1px #FFFFFF',
        },
    },

    address : {

    },

    bottomFooter: {
        backgroundColor: 'rgb(41 41 41)',
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
    },

    copyright: {
        color: 'white',
    },
}

export default styles;
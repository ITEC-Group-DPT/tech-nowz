import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    userItemWrapper: {
        display: 'flex',
        justifyContent: 'end',
        transition: '250ms',
    },

    navItem: {
        marginRight: '.5rem',
        marginLeft: '.5rem',
        display: 'flex',
    },

    navLink: {
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        padding: '.5rem 1rem',
        transition: '400ms',
        borderRadius: '25px',
        //marginRight
        '&:hover': {
            backgroundColor: '#737373',
        }
    },

    icon: {
        fontSize: 'large',
    },

    navTitle: {
        fontSize: '.8rem',
        marginLeft: '15px',
    }
});

export default useStyles;
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
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
        '&:hover': {
            backgroundColor: '#737373',
        }
    },

    icon: {
        '& *': {
            fontSize: 'large !important',
            marginRight: '.5rem !important',
        }
    },

    navTitle: {
        fontSize: '.8rem !important',
    }

});

export default useStyles;
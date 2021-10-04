import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    navItem: {
        marginRight: '.5rem',
        marginLeft: '.5rem',
    },

    navLink: {
        color: 'white',
        textDecoration: 'none',
        paddingRight: '.5rem',
        display: 'flex',
        padding: '.5rem 1rem',
        transition: '400ms',
        borderRadius: '15px',
        '&:hover': {
            backgroundColor: '#737373',
        }
    },

    icon: {
        fontSize: 'medium !important',
        marginRight: '.5rem',
    },

});

export default useStyles;
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container : {
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },

    logoWrapper : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo : {
        overflow: 'hidden',
        backgroundColor: 'white',
        width: '165px',
        height: '34px',
        //animation: 'float 3s ease-in-out infinite',
    },

    menuContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    menuItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'black',
    },

    menuTitle: {
        marginLeft: '.7rem !important',
    },
});

export default useStyles;
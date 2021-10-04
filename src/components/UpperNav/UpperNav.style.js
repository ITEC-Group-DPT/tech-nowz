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

    menuWrapper: {
        display: 'flex',

    },

    menuItem: {
        display: 'flex',
        marginLeft: '3rem',
    },

    menuTitle: {
        marginLeft: '.7rem !important',
    },
});

export default useStyles;
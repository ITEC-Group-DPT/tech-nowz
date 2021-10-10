import { makeStyles } from '@mui/styles';

// const styles = {
//     userItemWrapper: {
//         display: 'flex',
//         justifyContent: 'end',
//     },

//     navItem: {
//         marginRight: '.5rem',
//         marginLeft: '.5rem',
//         display: 'flex',
//     },

//     navLink: {
//         color: 'white',
//         textDecoration: 'none',
//         display: 'flex',
//         justifyContent: 'center',
//         padding: '.5rem 1rem',
//         transition: '400ms',
//         borderRadius: '25px',
//         '&:hover': {
//             backgroundColor: '#737373',
//         }
//     },

//     icon: {
//         fontSize: 'large',
//     },

//     navTitle: {
//         fontSize: '.8rem',
//         marginLeft: '15px',
//     }

// }

const useStyles = makeStyles({

    userItemWrapper: {
        display: 'flex',
        justifyContent: 'end',
        transition: '400ms',
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
        marginRight: '20px',
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

//export default styles;
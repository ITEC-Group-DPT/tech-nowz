import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection:'column',
        height: '100vh',
        backgroundImage: 'url("https://wallpaperaccess.com/full/1836506.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    formContainer: {
        flex: 1,
        background: 'white',
        padding: '50px',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyItems:'center',
    },
    input: {
        'backgroundColor': '#eee',
        padding: '12px 15px',
        margin: '8px 0',
        fontSize: '0.7rem',
        borderRadius: '10px',
    },
    socialContainer: {

    },
    socialLink: {
        border: '1px solid #DDDDDD',
        borderRadius: '50%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 5px',
        height: 40,
        width: 40,

        color: '#333',
        fontSize: 14,
        textDecoration: 'none',
    },
    back: {
        color: '#333',
        textDecoration: 'none',
        display: 'block',
        margin: '16px 0'
    },
    signInButton: {
        background: '#272727 !important',
    },
    overlayContainer: {
        background: 'linear-gradient(133deg ,#7d7a7a,#000304)',
        display:'flex',
        flex: 1,
        textAlign:'center',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        padding: '0 50px'
    },
    overlayButton: {
        borderColor:'white !important',
        color: 'white !important'
    },
});

export default useStyles;
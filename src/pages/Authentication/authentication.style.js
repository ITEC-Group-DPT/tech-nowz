

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundImage: 'url("https://wallpaperaccess.com/full/1836506.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: 900,
        display: 'flex',
        position: 'relative',
    },
    formContainerLeft: {
        flex: 1,
        padding: '50px',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
    },
    formContainerRight: {
        flex: 1,
        padding: '50px',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
    },
    input: {
        backgroundColor: '#eee',
        padding: '12px 15px',
        margin: '8px 0',
        fontSize: '0.7rem',
        borderRadius: '10px',
    },
    title: {
        fontFamily: "Roboto Slab",
        fontSize: '1.8rem',
        margin: 0,
        fontWeight: 'bold',
        lineHeight: 1.2,
    },
    subTitle: {
        fontFamily: "IBM Plex Serif, serif",
        fontSize: 12,
        marginBottom: 1,
    },
    socialContainer: {
        margin: "20px 0 15px"
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
        fontFamily: "IBM Plex Serif, serif",
        fontSize: 13,
        color: '#333',
        textDecoration: 'none',
        display: 'block',
        margin: '16px 0'
    },
    mainButton: {
        background: '#272727 !important',
        borderRadius: '20px',


        fontSize: 13,
        fontWeight: 'bold',
        padding: '10px 45px',
        // letter-spacing: 1px;
        textTransform: 'uppercase',
    },
    overlayRight: {
        background: 'linear-gradient(133deg ,#7d7a7a,#000304)',
        display: 'flex',
        width: '50%',
        position: 'absolute',
        textAlign: 'center',
        height: '-webkit-fill-available',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        right: 0,

        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
        
    },
    overlayLeft: {
        background: 'linear-gradient(133deg ,#7d7a7a,#000304)',
        display: 'flex',
        height: '-webkit-fill-available',
        width: '50%',
        position: 'absolute',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',

        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
    },

    overlayButton: {
        borderColor: 'white !important',
        color: 'white !important'
    },
};

export default styles;
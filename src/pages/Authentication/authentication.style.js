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
        width: { xs: '90%', md: 900},
        height:{ xs: '90%', md: 'auto' },
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

        borderRadius: { xs: '10px', md: '10px 0 0 10px' },
    },

    formContainerRight: {
        flex: 1,
        padding: '50px',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: { xs: '10px', md: '0px 10px 10px 0px' },
    },

    input: {
        backgroundColor: '#eee',
        padding: '17px 15px',
        width: '100%',
        fontSize: '0.75rem',
        borderRadius: '10px',
        fontFamily: "'Montserrat', sans-serif",
    },

    redBorder: {
        border: "1px red solid",
    },

    errorMsg: {
        height: "20px",
        color: "red",
        fontSize: ".65rem",
        textAlign: "start",
        mb: 1,
    },

    title: {
        fontFamily: "Roboto Slab",
        fontSize: '1.8rem',
        margin: 0,
        fontWeight: 'bold',
        textAlign:'center',
        lineHeight: 1.2,
    },

    subTitle: {
        fontFamily: "IBM Plex Serif, serif",
        fontSize: 12,
        marginBottom: 1,
        textAlign: "center",
    },

    switch: {
        marginTop: 2,
        fontFamily: "IBM Plex Serif, serif",
        fontSize: 14,
        cursor:'pointer',
        textTransform:'initial',
        color:'black'
    },

    socialContainer: {
        margin: "20px 0 15px",
        display: "flex",
        justifyContent: "center",
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
        fontSize: 14,
        color: '#333',
        textDecoration: 'none',
        display: 'block',
        margin: '16px 0'
    },

    mainButton: {
        background: '#272727 !important',
        borderRadius: '20px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 13,
        fontWeight: 'bold',
        padding: '10px 45px',
        // letter-spacing: 1px;
        textTransform: 'uppercase',
    },

    overlayRight: {
        background: 'linear-gradient(307deg, rgb(0, 0, 0), rgb(100 100 100))',
        display: { xs: 'none', md: 'flex' },
        width: '50%',
        position: 'absolute',
        textAlign: 'center',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        right: 0,
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',

    },

    overlayLeft: {
        background: 'linear-gradient(65deg, rgb(0, 0, 0), rgb(82 82 82))',
        left: 0,
        display: { xs: 'none', md: 'flex' },
        height: '100%',
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

    overlayTitle: {
        fontFamily: "Roboto Slab",
        fontWeight: 'bold',
        fontSize: '1.8rem'
    },

    overlaySubTitle: {
        fontSize: '14px',
        fontWeight: '100',
        lineHeight: '20px',
        letterSpacing: '0.5px',
        margin: '20px 40px 30px',
        fontFamily: "'IBM Plex Serif', serif"
    },

    overlayButton: {
        borderColor: 'white !important',
        color: 'white',
        borderRadius: '20px',

        fontFamily: 'Montserrat, sans-serif',
        fontSize: 13,
        fontWeight: 'bold',
        padding: '10px 45px',
        textTransform: 'uppercase',
    },

    centerBox: {
        display: "flex",
        justifyContent: "center",
    },

    loadingIndicator: {
        color: "white",
    },

    showPWIcon: {
        fontSize: "1.2rem",
    },
};

export default styles;

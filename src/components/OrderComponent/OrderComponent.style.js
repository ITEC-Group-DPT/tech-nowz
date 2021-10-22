
const styles = {
    main: {
        justifyContent: 'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        width: '100%',
        marginTop: "3%",
    },
    titleDiv:{
        display: "flex",
        justifyContent:'space-between',
        width: {xs: "95%", md: "80%"},
        fontFamily: "'Roboto Slab', serif",
        fontSize: {xs: "1rem", md: "2rem"},
    },
    title: {
        fontWeight:"bold",
        fontSize: {xs: "1rem", md: "2rem"},
        fontFamily: "'Roboto Slab', serif",
    },
    titleBtn: {
        fontSize: {xs: "0.7rem", md: "1rem"},
        color: "black",
    },
    productList: {
        width: {xs: "95%", md: "80%"},
        display:'flex',
        flexDirection: 'column',
        margin: '0',
        padding: '0',
    },
    link : {
        textDecoration: "none"
    }
};

export default styles;
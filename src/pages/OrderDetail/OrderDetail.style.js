const styles = {
    main: {
        justifyContent:'center', 
        alignItems:'center',
        marginTop: "10%",
        marginBottom: "10%",
    },
    title: {
        fontWeight: "600",
        fontSize: "1.75rem",
        lineHeight: "1.5",
        fontFamily: "'Roboto Slab', serif",
        marginBot: '1%',
        marginTop: '3%',
    },
    content: {
        fontSize: "1rem",
        fontFamily: "'Roboto Slab', serif",
        fontWeight: "100",
    },
    productList: {
        width: "80%",
    },
    priceBox: {
        alignItems:'center',
        display: "flex",
        justifyContent:'space-between',
        width: {xs: "100%", md: "80%"},
    },
    price: {
        flexDirection: 'right',
        color: "red",
        fontFamily: "'Roboto Slab', serif",
        fontSize: "1.75rem",
        fontWeight: "bold",
    }
};

export default styles;

const styles = {
    box: {
		backgroundColor: 'rgb(245, 245, 245)',
        paddingBottom: '100px',
        paddingTop: '50px',
	},
    main: {
        minHeight: "60vh",
        padding: {
            xs: "18% 4%",
            sm: "60px 0 30px 2%",
            md: "80px 2%",
            lg: "90px 10%"
        },
        display: { xs: "block", sm: "flex" },
    },
    summary: {
        margin: {
            xs: "30px 0",
            sm: "0% 0% 0% 3%",
            md: "0% 0% 0% 5%",
        },
        flex: 3,
    },
    summaryData: {
        backgroundColor: "white",
        borderRadius: "25px",
        padding: { xs: "25px 20px", md: "35px 30px" },
        //boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
        //border: "1px solid rgba(0,0,0,.125)",
    },
    summaryTitle: {
        //fontFamily: "Roboto Slab",
        fontWeight: "500",
        fontSize: { xs: "0.85rem", md: "1rem" },
    },
    orderSummary: {
        //fontFamily: "Roboto Slab",
        fontWeight: "500",
        textAlign: 'center',
        mb: 3,
        fontSize: { xs: "0.9rem", md: "1.1rem" },
    },
    taxContainer: {
        marginTop: "12px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingBottom: "22px",
        borderBottom: "0.5px solid rgba(0,0,0,0.1)"
    },
    tax: {
        //fontFamily: "Roboto Slab",
        fontWeight: "500",
        fontSize: { sm: "0.85rem", md: "1rem" },
    },
    totalContainer: {
        marginTop: "12px",
        marginBottom: "18px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    total: {
        //fontFamily: "Roboto Slab",
        color: "red",
        fontWeight: "500",
        fontSize: { sm: "0.85rem", md: "1rem" },
    },
    checkoutButton: {
        marginTop: 3,
        padding: "10px 0px",
        borderRadius: "25px",
        textTransform: "none",
        backgroundColor: "#333333",
        fontSize: { sm: "0.6rem", md: "1rem" },
        width: "100%",
    },

    cartListWrapper: {
        flex: 7,
        position: "relative",
        //margin: "1.5% 3%",
    },

    removeRow: {
        position: "absolute",
        top: "-80px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    myCart: {
        //fontFamily: "'Roboto Slab', serif",
        fontSize: {
            xs: "1.5rem",
            lg: "2rem",
        },
        fontWeight: 'bold',
        textTransform: "none",
    },
    removeAll: {
        textTransform: "none",
        //fontFamily: "'Roboto Slab', serif",
        paddingBottom: "0",
        color: "black",
        fontWeight: "300",
        fontSize: {
            xs: "12px",
            lg: "15px",
        },
    },
};

export default styles;
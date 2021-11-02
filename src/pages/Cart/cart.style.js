
const styles = {
    main: {
        minHeight: "60vh",
        margin: {
            xs: "12% 6%",
            sm: "60px 0 30px 2%",
            md: "80px 2%",
            lg: "80px 10%"
        },
        display: { xs: "block", sm: "flex" },
    },
    summary: {
        margin: {
            xs: "30px 0",
            sm: "1.5% 2% 0 3%",
            md: '1.5% 5%'
        },
        flex: 2.5,
    },
    summaryData: {
        padding: { xs: "14px 11px", md: "26px 18px" },
        boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
        border: "1px solid rgba(0,0,0,.125)",

    },
    summaryTitle: {
        fontFamily: "Roboto Slab",
        fontWeight: "500",
        fontSize: { sm: "0.85rem", md: "1rem" },
    },
    orderSummary: {
        fontFamily: "Roboto Slab",
        fontWeight: "500",
        textAlign: 'center',
        fontSize: { sm: "0.85rem", md: "1rem" },
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
        fontFamily: "Roboto Slab",
        fontWeight: "300",
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
        fontFamily: "Roboto Slab",
        color: "red",
        fontWeight: "300",
        fontSize: { sm: "0.85rem", md: "1rem" },
    },
    checkoutButton: {
        marginTop: 2,
        // background: "#dc3545",
        fontSize: { sm: "0.6rem", md: "0.8rem" },
        width: "100%",
    },
    removeRow: {
        position: "absolute",
        top: "-35px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    myCart: {
        fontFamily: "'Roboto Slab', serif",
        textTransform: "uppercase",
        fontSize: "1.5rem",
    },
    removeAll: {
        textTransform: "none",
        fontFamily: "'Roboto Slab', serif",
        color: "gray",
        fontWeight: "300",
        fontSize: "12px",
    },
};

export default styles;

const styles = {
    box: {
		backgroundColor: 'rgb(245, 245, 245)',
        paddingBottom: '100px',
        paddingTop: '30px',
	},
    main: {
        minHeight: "60vh",
        padding: {
            xs: "15% 4%",
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
        borderRadius: "4px",
        padding: { xs: "25px 20px", md: "35px 30px" },
        //boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
        //border: "1px solid rgba(0,0,0,.125)",
    },
    summaryTitle: {
        //fontFamily: "Roboto Slab",
        fontWeight: "500",
        fontSize: { xs: "15px", md: "17px" },
    },
    orderSummary: {
        //fontFamily: "Roboto Slab",
        fontWeight: "500",
        textAlign: 'center',
        mb: 3,
        fontSize: { xs: "18px", md: "20px" },
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
        fontSize: { xs: "16px", md: "18px" },
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
        fontSize: { xs: "18px", md: "18px" },
    },
    checkoutButton: {
        marginTop: 3,
        padding: "10px 0px",
        textTransform: "none",
        backgroundColor: "#e32436",
        fontSize: { xs: "15px", md: "17px" },
        width: "100%",
        transition: "400ms",
        '&:hover': {
            backgroundColor: "#bb1d2c",
        }
    },

    cartListWrapper: {
        flex: 7,
        position: "relative",
        //margin: "1.5% 3%",
    },

    removeRow: {
        position: "absolute",
        top: {
            xs: "-55px",
            md: "-70px",
        },
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    myCart: {
        //fontFamily: "'Roboto Slab', serif",
        fontSize: {
            xs: "26px",
            lg: "32px",
        },
        fontWeight: 'bold',
        textTransform: "none",
    },
    removeAll: {
        textTransform: "none",
        //fontFamily: "'Roboto Slab', serif",
        paddingBottom: "0",
        color: "#5b5b5b",
        fontSize: {
            xs: "12px",
            lg: "15px",
        },
    },
    isLoadingWrapper: {
        display: { xs: "block", sm: "flex" },
    },
    skeletonRemoveAll: {
		bgcolor: '#ededed',
	},
    skeletonSummary: {
        bgcolor: '#ededed',
        height: '260px',
    },
    skeletonCheckoutBtn: {
        bgcolor: '#ededed',
        maxWidth: 'none',
        width: '100%'
    },
};

export default styles;
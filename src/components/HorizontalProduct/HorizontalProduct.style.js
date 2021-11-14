const styles = {
    productCard: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        padding: {
            xs: "10px",
            md: "10px 15px",
        },
        marginBottom: { xs: '14px', md: '20px' },
        flex: 1,
        borderRadius: {
            xs: "10px",
            md: "25px",
        },
        boxShadow: "none",
        userSelect: "none",
    },
    productImg: {
        height: {
            xs: "25%",
            lg: "20%",
        },
        width: {
            xs: "25%",
            lg: "20%",
        },
        objectFit: "contain",
    },
    productContent: {
        padding: {
            xs: "0px 10px",
            md: "16px",
        },
        width: '30%',
        flex: 3,
    },
    productName: {
        fontWeight: '500',
        //fontFamily: "'Roboto Slab', serif",
        fontSize: {
            xs: "13px",
            md: "16px"
        },

        //max 2 line
        textOverflow: "ellipsis",
        display: "-webkit-box",
        overflow: "hidden",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
    },
    priceContainer: {
        paddingLeft: '3%',
        margin: '0',
        width: "100%",
        flex: 1,
        paddingBottom: "16px !important",
    },
    productPrice: {
        //fontFamily: "'IBM Plex Serif', serif",
        fontWeight: "700",
        fontSize: {
            xs: "11px",
            md: "15px",
        },
       minWidth: {xs: "70px", md: "100px" },

    },
    ratingContainer: {
        width: '10%',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        marginTop: '1%',
    },
    productSold: {
        fontSize: { xs: "10px", md: "12px" },
        paddingLeft: '1%',
        //fontFamily: "'IBM Plex Serif', serif",
    },
    quantityContainer: {
        padding: "4px 0",
        display: "flex",
        width: { xs: "60px", md: "80px" },
        borderRadius: "0.25rem",
        justifyContent: "space-evenly",
        alignItems: "center",
        border: "1px solid rgb(230, 230, 230)"
    },
    productQuantity: {
        mt: {
            xs: 1,
            md: 2,
        },
        fontSize: { xs: "0.6rem", md: ".8rem" },
        color: '#656565',
        //fontFamily: "'IBM Plex Serif', serif",
    },
    productCartQuantity: {
        fontSize: { xs: "0.6rem", md: "0.9rem" },
        color: '#656565',
        //fontFamily: "'IBM Plex Serif', serif",
        userSelect: "none",
    },
    changeQty: {
        fontSize: { xs: "0.6rem", md: "0.8rem" },
        cursor: 'pointer',
        display: "flex",
        alignItems: 'center',
        userSelect: "none",
    },
    productCartQuantity: {
        fontSize: { xs: "0.6rem", md: "0.9rem" },
        color: '#656565',
        //fontFamily: "'IBM Plex Serif', serif",
    },
    changeQty: {
        fontSize: { xs: "0.6rem", md: "0.8rem" },
        cursor: 'pointer',
        display: "flex",
        alignItems: 'center',
    },
    buttonClose: {
        color: 'black',
        position: 'absolute',
        minWidth: 0,
        right: {
            xs: 5,
            md: 12,
        },
        top: {
            xs: 5,
            md: 12,
        },
    },
    closeIc: {
        width: { xs: 18, md: 20 },
        height: { xs: 18, md: 20 },
    },
};

export default styles;

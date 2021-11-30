const styles = {
    productCard: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        padding: {
            xs: "10px",
            md: "10px 15px",
        },
        flex: 1,
        borderRadius: "0",
        boxShadow: "none",
        borderBottom: "2px solid #f5f5f5",
        userSelect: "none",
    },
    productImg: {
        height: {
            xs: "25%",
            md: "15%",
        },
        width: {
            xs: "25%",
            md: "15%",
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
            md: "15px"
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
    rating: {
        fontSize: "16px",
    },
    productSold: {
        fontSize: { xs: "10px", md: "14px" },
        paddingLeft: '1%',
        //fontFamily: "'IBM Plex Serif', serif",
    },
}

export default styles
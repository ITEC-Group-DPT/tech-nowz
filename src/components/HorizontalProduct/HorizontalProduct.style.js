const styles = {
    productCard: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',

        paddingLeft: "2%",
        marginTop: { xs: '3%', md: '1.5%' },
        flex: 1,
        boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
    },
    productImg: {
        padding: "10px 0",
        height: { xs: '17%', sm: '20%' },
        width: { xs: '17%', sm: '20%' },
        objectFit: "contain"
    },
    productContent: {
        width: '30%',
        flex: 3,
    },
    productName: {
        fontWeight: '300',
        fontFamily: "'Roboto Slab', serif",
        fontSize: {
            xs: "0.75rem",
            md: "1rem"
        },

        //max 2 line
        lineHeight: "16px",
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
        fontFamily: "'IBM Plex Serif', serif",
        fontWeight: "bold",
        fontSize: {
            xs: ".7rem",
            md: "1rem",
        },
        minWidth: { sm: "72px", md: "100px" },

    },
    ratingContainer: {
        width: '10%',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        marginTop: '1%',
    },
    productSold: {
        fontSize: { xs: "0.6rem", md: "1rem" },
        paddingLeft: '1%',
        fontFamily: "'IBM Plex Serif', serif",
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
        fontSize: { xs: "0.65rem", md: "1rem" },
        color: '#656565',
        fontFamily: "'IBM Plex Serif', serif",
    },
    productCartQuantity: {
        fontSize: { xs: "0.6rem", md: "0.9rem" },
        color: '#656565',
        fontFamily: "'IBM Plex Serif', serif",
        userSelect: "none",

    },
    changeQty: {
        fontSize: { xs: "0.6rem", md: "0.8rem" },
        cursor: 'pointer',
        display: "flex",
        alignItems: 'center',
        userSelect: "none",
    },
    buttonClose: {
        color: 'black',
        position: 'absolute',
        minWidth: 0,
        right: 0,
        top: 0,

    },
    closeIc: {
        width: { xs: 18, md: 20 },
        height: { xs: 18, md: 20 },
    },
};

export default styles;
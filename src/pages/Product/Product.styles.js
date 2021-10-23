import { colors } from "../../constant"

const styles = {
    nextArrow: {
        position: "absolute",
        padding: 0,
        right: "100px",
        top: "45%",
        zIndex: '1000',
    },

    prevArrow: {
        position: "absolute",
        padding: 0,
        left: "100px",
        top: "45%",
        zIndex: '1000',
    },

    box: {
        paddingTop: "40px",
        bgcolor: "rgb(245, 245, 245)",
    },

    productContainer: {
        minHeight: "85vh",
        bgcolor: "white",
        borderRadius: "15px",
        padding: "100px",
    },

    image: {
        height: "550px",
        width: "100%",
        objectFit: 'contain',
        margin: 0,
    },

    imgSkeleton: {
        bgcolor: "rgb(245, 245, 245)",
        borderRadius: '15px',
        boxShadow: 'none',
        height: "500px",
        width: "500px !important",
        marginLeft: "100px",
    },

    skeletonColor: {
        bgcolor: "rgb(245, 245, 245)",
    },

    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    boxWrapper: {
        width: "100%",
    },

    pName: {
        textAlign: "center",
        fontSize: "1.9rem",
        fontWeight: "bold",
        paddingRight: "0rem",
    },

    pRatingWrapper : {
        display: "flex",
        justifyContent: "center",
        mt: 2,
    },

    pRating: {
        fontSize: "1.1rem",
    },

    pSold: {
        fontSize: ".7rem",
        marginLeft: '5px',
        alignSelf: "center",
    },

    priceWrapper: {
        mt: 5,
    },

    dividerWrapper: {
        display: "flex",
        justifyContent: "center",
    },

    divider: {
        height: "3px",
        width: "40px",
        border: "none",
        borderRadius: "100px",
        color: "black",
        backgroundColor: "black",
    },

    pPrice: {
        textAlign: "center",
        fontSize: "1.2rem",
        fontWeight: "bold",
        mt: 2,
    },

    btnWrapper: {
        marginTop: "70px",
        display: "flex",
        justifyContent: "center",
    },

    favoriteBtn: {
        padding: ".8rem",
        color: "black",
        border: "none",
        marginRight: "60px",
        textTransform: 'none',
        '&:hover': {
            border: "none",
            bgcolor: "#efefef",
        }
    },

    addBtn: {
        bgcolor: colors.primary,
        padding: ".8rem 1.5rem",
        textTransform: 'none',
        '&:hover': {
            bgcolor: "#525252",
        }
    },

    boxDesc: {
        bgcolor: "rgb(245, 245, 245)",
        padding: "100px 0px",
    },

    detailContainer: {
        marginTop: "40px",
        minHeight: "40vh",
        bgcolor: "white",
        borderRadius: "15px",
        padding: "30px",
    },

    tabListWrapper: {
        display: "flex",
        justifyContent: "center",
        mb: 3,
    },

    tabTitle: {
        margin: "0 80px",
        textTransform: 'none',
        color: "black",
        fontWeight: "bold",
        fontSize: "1.1rem",
    },

    details: {
        whiteSpace: "pre-line",
        fontSize: ".95rem",
        lineHeight: 2,
        fontWeight: 300,
        textAlign: "center",
    },

    relatedProductContainer: {
        marginTop: "60px",
        paddingBottom: "80px",
    },

    sliderTitle: {
        fontSize: '1.4rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '25px',
    },

    boxCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    skeletonButton: {
        bgcolor: "rgb(245, 245, 245)",
        marginRight: "30px",
        marginLeft: "30px",
    },

    skeletonTab: {
        bgcolor: "rgb(245, 245, 245)",
        marginRight: "50px",
        marginLeft: "50px",
    }
}

export default styles
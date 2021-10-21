import { colors } from "../../constant"

const styles = {
    nextArrow: {
        position: "absolute",
        padding: 0,
        right: "150px",
        top: "45%",
        zIndex: '1000',
    },

    prevArrow: {
        position: "absolute",
        padding: 0,
        left: "150px",
        top: "45%",
        zIndex: '1000',
    },

    box: {
        marginTop: "50px",
    },

    upperContainer: {
        minHeight: "90vh",
    },

    image: {
        height: "700px",
        width: "100%",
        objectFit: 'contain',
        margin: 0,
    },

    imgSkeleton: {
        bgcolor: '#e9e9e9',
        borderRadius: '25px',
        boxShadow: 'none',
        height: "600px",
        width: "100%",
    },

    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    pName: {
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        paddingRight: "0rem",
    },

    pRatingWrapper : {
        display: "flex",
        justifyContent: "center",
        mt: 2,
    },

    pRating: {

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
        fontSize: "1.3rem",
        fontWeight: "bold",
        mt: 2,
    },

    btnWrapper: {
        marginTop: "50px",
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

    lowerContainer: {
        bgcolor: "white",
        minHeight: "50vh",
        borderRadius: "25px",
    }
}

export default styles
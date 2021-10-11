const styles = {
    sliderTitle: {
        fontSize: '1.8rem !important',
        fontWeight: 'bold !important',
        textAlign: 'center',
        marginBottom: '25px !important',
    },

    nextArrow: {
        position: "absolute",
        padding: 0,
        right:{
            xs: "10px",
            lg: "-10px",
        },
        top: "45%",
        zIndex: '1000',
    },

    prevArrow: {
        position: "absolute",
        padding: 0,
        left:{
            xs: "10px",
            lg: "-40px",
        },
        top: "45%",
        zIndex: '1000',
    },
}

export default styles;
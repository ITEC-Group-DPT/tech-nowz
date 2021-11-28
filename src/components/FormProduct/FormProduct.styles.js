const styles = {
    box: {
        padding: {
            md: "0px 90px",
            xs: 0,
        },
        borderRadius: '25px',

    },
    textField: {
        mb: 3,
        width: "100%",
        backgroundColor: "white",
    },

    cancelBtn: {
        backgroundColor: "red",
        color: "white",
        textTransform: "none",
        px: 2,
        py: 1,
        mx: {
            xs: 1,
            md: 5,
        },
        "&: hover": {
            backgroundColor: "#b90000",
        },
    },

    submitBtn: {
        backgroundColor: "#333333",
        color: "white",
        textTransform: "none",
        px: 2,
        py: 1,
        mx: {
            xs: 1,
            md: 5,
        },
        "&: hover": {
            backgroundColor: "#000000",
        },
    }

};

export default styles;
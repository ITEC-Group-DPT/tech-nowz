const styles = {
    box: {
        p: {
            xs: 3,
            md: 5,
        },
        width: {
            md: "500px",
        },
    },

    textField: {
        mb: 2,
        width: "100%",
    },

    errorMsg: {
        height: "20px",
        color: "red",
        fontSize: ".65rem",
        textAlign: "start",
        mb: 1,
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
    },
}

export default styles;
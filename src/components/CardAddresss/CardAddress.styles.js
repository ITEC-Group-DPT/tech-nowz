const styles = {
    addressCard: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        padding: {
            xs: "5px",
            md: "15px 20px",
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

    actionsWrapper: {
        position: 'absolute',
        right: {
            xs: 2,
            md: 10,
        },
        top: {
            xs: 0,
            md: 5,
        },
    },

    infoWrapper: {
        display: 'flex',
    },

    title: {
        fontSize: {
            xs: "13px",
            md: "17px",
        },
        minWidth: {
            xs: "80px",
            md: "120px",
        },
        fontWeight: "500",
    },

    data: {
        fontSize: {
            xs: "13px",
            md: "17px"
        },
        mb: 1,
    },

    editBtn: {
        transition: "400ms",
        "&:hover > svg": {
            color: "#2d73fb",
        },
    },
    deleteBtn: {
        transition: "400ms",
        "&:hover >svg": {
            color: "red",
        },
    },
    icon: {
        color: "black",
        fontSize: "22px",
        transition: "400ms",
    },
}

export default styles
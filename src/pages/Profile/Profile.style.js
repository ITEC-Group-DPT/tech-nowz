const styles = {
    box: {
        backgroundColor: 'rgb(245, 245, 245)',
        paddingBottom: '100px',
        paddingTop: '30px',
    },

    main: {
        minHeight: "60vh",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",


        padding: {
            xs: "15% 4%",
            sm: "60px 0 30px 2%",
            md: "80px 2%",
            lg: "90px 10%"
        },
    },
    inputUsername: {
        maxWidth: "100px",
        fontWeight: "bold",
        marginTop: 8,
        fontSize: 18,
    },

    btwWrapper: {
        display: "flex",
        justifyContent: "center",
    },

    editBtn: {
        textTransform: 'none',
        color: 'black',
        mx: 2,
        minWidth: "200px",
        py: 1,
        borderColor: "black",
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderColor: "black"
        }

    },

    changeBtn: {
        textTransform: 'none',
        color: 'black',
        minWidth: "200px",
        mx: 2,
        py: 1,
        borderColor: "black",
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderColor: "black"
        }
    }
}

export default styles;
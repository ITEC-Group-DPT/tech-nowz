const styles = {
    wrapper: {
        zIndex: 1200,
    },

    menu: {
        padding: "5px 15px",
        borderRadius: "15px",
    },

    menuLink: {
        textDecoration: "none",
        color: "black",
    },

    menuItem: {
        margin: "3px 0px",
        padding: "5px 20px",
        transition: '400ms',
        '&:hover': {
            backgroundColor: '#ededed',
            borderRadius: "50px",
        }
    },

    menuIcon: {
        fontSize: "1.1rem",
        mr: 1,
    },

    menuText: {
        fontSize: "16px",
    },
}

export default styles;
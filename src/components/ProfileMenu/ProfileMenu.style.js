const styles = {
    wrapper: {
        zIndex: 1200,
    },

    menu: {
        padding: ".1rem 1rem",
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

    menuItemSignOut: {
        color: "red",
        margin: "10px 0px",
        padding: "5px 20px",
        transition: '400ms',
        '&:hover': {
            backgroundColor: 'red',
            color: 'white',
            borderRadius: "50px",
        }
    },

    menuIcon: {
        fontSize: "1.1rem",
        mr: 1,
    },

    menuText: {
        fontSize: ".9rem",
    },
}

export default styles;
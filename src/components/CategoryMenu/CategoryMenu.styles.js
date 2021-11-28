const styles = {
    wrapper: {
        zIndex: 1200,
    },

    menu: {
        padding: "8px 25px",
        borderRadius: "15px",
    },

    menuLink: {
        textDecoration: "none",
        color: "black",
    },

    menuItem: {
        margin: "3px 0px",
        padding: "5px 30px",
        transition: '400ms',
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: '#ededed',
            borderRadius: "50px",
        }
    },

    menuItemDrawer: {
        margin: "3px 0px",
        padding: "5px 30px",
        transition: '400ms',
        display: 'flex',
        minHeight: '20px',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: '#ededed',
            borderRadius: "50px",
        }
    },

    menuText: {
        fontSize: "16px",
    },
}

export default styles;
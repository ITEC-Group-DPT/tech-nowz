const styles = {
    userItemWrapper: {
        display: 'flex',
        justifyContent: 'end',
        transition: '250ms',
    },

    navItem: {
        marginRight: '.5rem',
        marginLeft: '.5rem',
        display: 'flex',
    },

    navLink: {
        textDecoration: 'none',
        color: 'white',
    },

    btnNav: {
        textTransform: "none",
        textDecoration: 'none',
        color: 'white',
        padding: '.5rem 1rem',
        transition: '400ms',
        borderRadius: '25px',
        //marginRight
        '&:hover': {
            backgroundColor: '#737373',
        }
    },

    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        padding: '.5rem 1rem',
        transition: '400ms',
        borderRadius: '25px',
        //marginRight
        '&:hover': {
            backgroundColor: '#737373',
        }
    },

    icon: {
        fontSize: 'large',
    },

    navTitle: {
        fontSize: '.8rem',
        marginLeft: '15px',
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
};

export default styles;
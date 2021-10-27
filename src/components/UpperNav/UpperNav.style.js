const styles = {
    container : {
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },

    logoWrapper : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo : {
        overflow: 'hidden',
        backgroundColor: 'white',
        width: '165px',
        height: '34px',
    },

    menuContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    menuWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    menuItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'black',
    },

    menuTitle: {
        marginLeft: '.7rem',
    },

    btnNav: {
        textTransform: "none",
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            backgroundColor: 'white',
        }
    },
}

export default styles
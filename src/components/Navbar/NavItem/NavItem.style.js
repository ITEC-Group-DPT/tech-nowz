const styles = {
    navItem: {
        marginRight: '.5rem',
        marginLeft: '.5rem',
        display: 'flex',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        padding: '.5rem 1rem',
        transition: '400ms',
        borderRadius: '25px',

        '&:hover': {
            backgroundColor: '#737373',
        }
    },

    navLink: {
        textDecoration: 'none',
    },

    icon: {
        '& *': {
            fontSize: 'large !important',
            marginRight: '.5rem !important',
        }
    },

    navTitle: {
        fontSize: '.8rem !important',
    }
}

export default styles;

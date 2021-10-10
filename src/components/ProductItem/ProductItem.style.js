const styles = {
    card: {
        maxWidth: 345,
        minHeight: 350,
        borderRadius: '25px',
        boxShadow: 'none',
    },

    cardActionArea: {
        padding: {
            lg:'.9rem',
            xs: '0rem .5rem .5rem .5rem',
        } ,
    },

    pImage: {
        objectFit: 'contain'
    },

    pNameWrapper: {
        padding: {
            xs: '10px',
        }
    },

    pName: {
        margin: 0,
        fontSize: {
            xs: '.75rem',
            lg: '.85rem',
        },
        fontWeight: '500',
        minHeight: '80px',
    },

    pRatingWrapper: {
        display: 'flex',
        alignItems: 'center',
    },

    pRating: {
        marginLeft: {
            xs: '7px',
            lg: '12px',
        },
        fontSize: {
            xs: '.9rem',
            lg: '1rem',
        }
    },

    pSold: {
        fontSize: {
            xs: '.55rem',
            lg: '.6rem',
        },
        marginLeft: '5px',
    },

    cardBottom: {
        marginLeft: '10px',
        padding: 0,
    },

    pPrice: {
        fontSize: {
            xs: '.8rem',
            lg: '.9rem',
        },
        fontWeight: '600',
    },

    pAddCart: {
        color: 'black',
        marginLeft: 'auto',
    },
}

export default styles;

const styles = {
    productCard: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        width: '800px',
        padding: "10px 5px",
        marginBottom: '24px',
        flex: 1,
        boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
    },
    productImg: {
        height: '180px',
        flex: 1
    },
    productContent: {
        flex: 3,
    },
    productName: {
        fontWeight: '600',
        fontFamily: "'Roboto Slab', serif",
        paddingRight: '46px'
    },
    priceContainer: {
        flex: 1,
    },
    productPrice: {
        fontFamily: "'IBM Plex Serif', serif",
    },
    ratingContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '6px',
    },
    productSold: {
        fontSize: '12px',
        paddingLeft: '2px',
        fontFamily: "'IBM Plex Serif', serif",
    },
    productQuantity: {
        fontSize: '14px',
        color: '#656565',
        fontFamily: "'IBM Plex Serif', serif",
    },
    buttonClose: {
        color: 'black',
        position: 'absolute',
        minWidth: 0,
        right: 0,
        top: 0,
    },
    closeIc: {
        width: '22px',
        height: '22px',
    },
};

export default styles;
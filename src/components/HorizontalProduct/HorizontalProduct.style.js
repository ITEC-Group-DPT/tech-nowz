const styles = {
	productCard: {
		display: 'flex',
		position: 'relative',
		alignItems: 'center',

		paddingLeft: { xs: '5%', md: '2%' },
		marginTop: { xs: '3%', md: '1.5%' },
		flex: 1,
		boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
	},
	productImg: {
		height: '22%',
		width: '22%',
		objectFit: 'contain',
	},
	productContent: {
		width: '30%',
		flex: 3,
	},
	productName: {
		fontWeight: '600',
		fontFamily: 'Roboto Slab, serif',
		fontSize: { xs: '0.75rem', md: '1rem' },
	},
	priceContainer: {
		paddingLeft: '3%',
		margin: '0',
		width: '100%',
		flex: 1,
	},
	productPrice: {
		fontFamily: 'IBM Plex Serif, serif',
		fontWeight: 'bold',
		fontSize: {
			xs: '.7rem',
			md: '1rem',
		},
	},
	ratingContainer: {
		width: '10%',
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		marginTop: '1%',
	},
	productSold: {
		fontSize: { xs: '0.6rem', md: '1rem' },
		paddingLeft: '1%',
		fontFamily: 'IBM Plex Serif, serif',
	},
	productQuantity: {
		fontSize: { xs: '0.65rem', md: '1rem' },
		color: '#656565',
		fontFamily: 'IBM Plex Serif, serif',
	},
	buttonClose: {
		color: 'black',
		position: 'absolute',
		minWidth: 0,
		right: 0,
		top: 0,
	},
	closeIc: {
		width: '3%',
		height: '3%',
	},
};

export default styles;

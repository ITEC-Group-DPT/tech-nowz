const styles = {
	link: {
		textDecoration: 'none',
	},
	card: {
		maxWidth: 345,
		minHeight: 350,
		borderRadius: '25px',
		boxShadow: 'none',
		padding: {
			lg: '.9rem',
			xs: '0rem .5rem .5rem .5rem',
		},
	},
	cardSlider: {
		maxWidth: 345,
		minHeight: 350,
		borderRadius: '25px',
		boxShadow: 'none',
		marginRight: {
			xs: 0,
			md: '27px',
		},
		padding: {
			lg: '.9rem',
			xs: '0rem 1.1rem 1.1rem 1.1rem',
		},
	},
	box: {
		'&:hover': {
			transition: 'transform 0.3s ease-in-out',
			transform: 'scale(1.03)',
			backgroundColor: 'white',
		},
	},
	pImage: {
		objectFit: 'contain',
	},
	pNameWrapper: {
		minHeight:"50px",
		padding: {
			xs: '0px 10px',
			lg: '10px',
		},
	},
	pName: {
		margin: 0,
		fontSize: {
			xs: '.7rem',
			lg: '.85rem',
		},
		fontWeight: '500',
		lineHeight: "20px",
		textOverflow: "ellipsis",
        display: "-webkit-box",
        overflow: "hidden",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
	},
	pNameSlider: {
		margin: 0,
		fontSize: '.85rem',
		fontWeight: '500',
		lineHeight: "20px",
		textOverflow: "ellipsis",
        display: "-webkit-box",
        overflow: "hidden",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",

	},
	pRatingWrapper: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '10px',
	},
	pRating: {
		fontSize: {
			xs: '.9rem',
			lg: '1rem',
		},
	},
	pRatingSlider: {
		fontSize: '1rem',
	},
	pSold: {
		fontSize: {
			xs: '.55rem',
			lg: '.6rem',
		},
		marginLeft: '5px',
		alignSelf: 'center',
	},
	pSoldSlider: {
		fontSize: '.6rem',
		marginLeft: '5px',
	},
	cardBottom: {
		padding: '0px 0px 0px 10px',
	},
	pPrice: {
		fontSize: {
			xs: '.75rem',
			lg: '.9rem',
		},
		fontWeight: '600',
	},
	pPriceSlider: {
		fontSize: '.9rem',
		fontWeight: '600',
	},
	pAddCart: {
		color: 'black',
		marginLeft: 'auto',
	},
};

export default styles;

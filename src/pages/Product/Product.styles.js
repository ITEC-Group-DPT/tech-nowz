import { colors } from '../../constant';

const styles = {
	nextArrow: {
		position: 'absolute',
		padding: 0,
		right: {
			xs: '10px',
			lg: '100px',
		},
		top: '45%',
		zIndex: '1000',
	},
	prevArrow: {
		position: 'absolute',
		padding: 0,
		left: {
			xs: '10px',
			lg: '100px',
		},
		top: '45%',
		zIndex: '1000',
	},
	box: {
		paddingTop: '40px',
		bgcolor: 'rgb(245, 245, 245)',
	},
	productContainer: {
		minHeight: '85vh',
		bgcolor: 'white',
		borderRadius: '15px',
		padding: {
			xs: '40px 20px',
			lg: '100px',
		},
	},
	image: {
		height: {
			xs: '400px',
			lg: '550px',
		},
		width: '100%',
		objectFit: 'contain',
		margin: 0,
	},
	imgSkeleton: {
		bgcolor: 'rgb(245, 245, 245)',
		borderRadius: '15px',
		boxShadow: 'none',
		height: {
			xs: '350px',
			lg: '500px',
		},
		width: '500px !important',
		marginLeft: {
			xs: 0,
			lg: '100px',
		},
	},
	skeletonColor: {
		bgcolor: 'rgb(245, 245, 245)',
	},
	wrapper: {
		mt: {
			xs: 5,
			lg: 0,
		},
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	boxWrapper: {
		width: '100%',
	},
	pName: {
		textAlign: 'center',
		fontSize: {
			xs: '1.45rem',
			lg: '1.9rem',
		},
		fontWeight: 'bold',
		paddingRight: '0rem',
	},
	pRatingWrapper: {
		display: 'flex',
		justifyContent: 'center',
		mt: 2,
	},
	pRating: {
		fontSize: {
			xs: '1rem',
			lg: '1.1rem',
		},
	},
	pSold: {
		fontSize: {
			xs: '.65rem',
			lg: '.7rem',
		},
		marginLeft: '5px',
		alignSelf: 'center',
	},
	priceWrapper: {
		mt: 5,
	},
	dividerWrapper: {
		display: 'flex',
		justifyContent: 'center',
	},
	divider: {
		height: '3px',
		width: '40px',
		border: 'none',
		borderRadius: '100px',
		color: 'black',
		backgroundColor: 'black',
	},
	pPrice: {
		textAlign: 'center',
		fontSize: {
			xs: '1rem',
			lg: '1.2rem',
		},
		fontWeight: 'bold',
		mt: 2,
	},
	btnWrapper: {
		marginTop: '70px',
		display: 'flex',
		justifyContent: 'center',
	},
	favoriteBtn: {
		padding: {
			xs: '.5rem',
			lg: '.8rem',
		},
		color: 'black',
		border: 'none',
		marginRight: {
			xs: '20px',
			lg: '60px',
		},
		textTransform: 'none',
		fontSize: {
			xs: "15px",
			lg: "18px",
		},
		'&:hover': {
			border: 'none',
			bgcolor: '#efefef',
		},
		minWidth: {
			xs: "170px",
			lg: "200px",
		},
	},
	addBtn: {
		bgcolor: colors.primary,
		padding: {
			xs: '.5rem 1rem',
			lg: '.8rem 1.5rem',
		},
		fontSize: {
			xs: "15px",
			lg: "18px",
		},
		textTransform: 'none',
		'&:hover': {
			bgcolor: '#525252',
		},
	},
	boxDesc: {
		bgcolor: 'rgb(245, 245, 245)',
		padding: '100px 0px',
	},
	detailContainer: {
		marginTop: '40px',
		minHeight: '40vh',
		bgcolor: 'white',
		borderRadius: '15px',
		padding: {
			xs: '20px',
			lg: '30px',
		},
	},
	tabListWrapper: {
		display: 'flex',
		justifyContent: 'center',
		mb: {
			xs: 0,
			lg: 3,
		},
	},
	tabTitle: {
		margin: {
			xs: '0 15px',
			lg: '0 80px',
		},
		textTransform: 'none',
		color: 'black',
		fontWeight: 'bold',
		fontSize: {
			xs: '.9rem',
			lg: '1.1rem',
		},
	},
	details: {
		whiteSpace: 'pre-line',
		fontSize: {
			xs: '.8rem',
			lg: '.95rem',
		},
		lineHeight: 2,
		fontWeight: 300,
		textAlign: 'center',
		padding: 0,
	},
	relatedProductContainer: {
		marginTop: '60px',
		paddingBottom: '80px',
	},
	sliderTitle: {
		fontSize: {
			xs:	'20px',
			md: '27px',
		},
		fontWeight: 'bold',
		marginBottom: 0,
	},
	boxCenter: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	skeletonButton: {
		bgcolor: 'rgb(245, 245, 245)',
		marginRight: '30px',
		marginLeft: '30px',
	},
	skeletonTab: {
		bgcolor: 'rgb(245, 245, 245)',
		marginRight: '50px',
		marginLeft: '50px',
	},
	skeletonTitle: {
		bgcolor: '#ededed',
		mb: 4,
	},

	relatedProductWrapper: {
		display: "flex",
		marginBottom: '25px',
		alignItems: "center",
	},

	link: {
		textDecoration: 'none',
		margin: 'auto 27px auto auto',
	},

	viewMoreBtn: {
		textTransform: 'none',
		color: 'black',
	},
};

export default styles;

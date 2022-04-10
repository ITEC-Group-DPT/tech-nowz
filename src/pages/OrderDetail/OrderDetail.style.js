const styles = {
	box: {
		minHeight: '80vh',
		backgroundColor: 'rgb(245, 245, 245)',
		paddingBottom: '100px',
		paddingTop: '50px',
	},
	divider: {
		mt: 5,
		mb: 2,
	},
	wrapper: {
		backgroundColor: 'white',
		borderRadius: '5px',
		display: 'flex',
		alignItems: 'center',
		padding: '30px 40px !important',
	},
	wrapperSkeleton: {

	},
	orderInfoSkeleton: {
		bgcolor: '#ededed',
		borderRadius: '5px',
		height: '370px',
	},
	ratingSkeleton: {
		bgcolor: '#ededed',
		width: '50%',
		height: '50px',
	},
	title: {
		fontWeight: '600',
		fontSize: { xs: '20px', md: '24px' },
		mb: 1,
	},
	content: {
		fontSize: {
			xs: '14px',
			md: '17px',
		},
		// mt: '0.5',
	},
	priceWrapper: {
		display: 'flex',
		//mt: 1,
	},
	upperTitles: {
		fontSize: {
			xs: '14px',
			md: '17px',
		},
		fontWeight: '500',
	},
	upperValues: {
		ml: 'auto',
		fontSize: {
			xs: '14px',
			md: '17px',
		},
		fontWeight: '500',
	},
	lowerPriceWrapper: {
		mt: 2,
		display: 'flex',
	},
	lowerTitles: {
		fontWeight: '600',
		fontSize: {
			xs: '15px',
			md: '24px',
		},
	},
	lowerValues: {
		fontWeight: '600',
		fontSize: {
			xs: '15px',
			md: '20px',
		},
		ml: 'auto',
		color: 'red',
	},
	packageWrapper: {},
	productList: {
		borderLeft: {
			xs: 'none',
			lg: '1px solid #e0e0e0',
		},
		paddingLeft: {
			xs: 'none',
			lg: '48px',
		},
	},
	productTitle: {
		textAlign: 'center',
		fontWeight: '600',
		fontSize: { xs: '20px', md: '26px' },
		mb: 2,
	},
	ratingTitle: {
		fontSize: {
			xs: '14px',
			md: '17px',
		},
		pt: 0.4,
		fontWeight: 'bold',
	},

	stepper: {
		display: 'flex',
	},

	lineWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '40px',
		width: '50px',
	},

	checkIcon: {
		height: '20px',
		width: '20px',
		color: 'black',
	},

	checked: {
		boxShadow: 'none',
		height: '35px',
		width: '35px',
		alignSelf: 'center',
		pointerEvents: 'none',
		border: '2px solid black',
		backgroundColor: 'white',
	},

	stepWrapper: {
		display: 'flex',
    	flexDirection: 'column',
		minWidth: '60px',
		alignItems: 'center',
	},

	stepLine: {
		width: '35px',
		borderColor: 'black',
	},

	stepTitle: {
		mt: 1,
		fontSize: '14px',
	},
};

export default styles;

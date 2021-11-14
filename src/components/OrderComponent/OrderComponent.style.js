const styles = {
	main: {
		marginBottom: '5%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	contentDiv: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		padding: '0 !important',
	},
	titleDiv: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		width: { xs: '100%', md: '80%' },
		padding: '0px',
		mb: {
			xs: 1,
			md: 2,
		},
	},
	title: {
		fontWeight: 'bold',
		fontSize: {
            xs: "19px",
            lg: "24px",
        },
		//fontFamily: 'Roboto Slab, serif',
	},
	titleBtn: {
		textTransform: "none",
		fontSize: {
            xs: "14px",
            lg: "17px",
        },
		color: 'black',
	},
	productList: {
		width: { xs: '100%', md: '80%' },
		display: 'flex',
		flexDirection: 'column',
	},
	link: {
		textDecoration: 'none',
	},
};

export default styles;

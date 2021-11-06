const styles = {
	box: {
		minHeight: '100vh',
		backgroundColor: 'rgb(245, 245, 245)',
		paddingBottom: '100px',
        paddingTop: '50px',
	},
	main: {
		//paddingLeft: { xs: '2%', md: '4%' },
	},
	title: {
		fontWeight: '600',
		fontSize: { xs: '1.5rem', md: '1.75rem' },
		lineHeight: '1.5',
		//fontFamily: 'Roboto Slab, serif',
		marginTop: '3%',
	},
	content: {
		fontSize: '1rem',
		//fontFamily: 'Roboto Slab, serif',
		fontWeight: '100',
	},
	productList: {
		width: { xs: '100%', md: '80%' },
	},
	priceBox: {
		alignItems: 'center',
		display: 'flex',
		marginTop: '24px',
		justifyContent: 'space-between',
		width: { xs: '100%', md: '80%' },
	},
	price: {
		flexDirection: 'right',
		color: 'red',
		marginTop: '3%',
		//fontFamily: 'Roboto Slab, serif',
		fontSize: { xs: '1.5rem', md: '1.75rem' },
		fontWeight: 'bold',
	},
};

export default styles;

const styles = {
	container: {
		paddingTop: '1rem',
		paddingBottom: '1rem',
	},
	logoWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		overflow: 'hidden',
		backgroundColor: 'white',
		width: '165px',
		height: '34px',
	},
	menuContainer: {
		display: 'flex',
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
	searchComponent: {
		position: 'relative',
		paddingLeft: '0 !important',
		margin: '0',
	},
	searchBar: {
		width: { xs: '104%', md: '102%' },
	},
	searchResult: {
		position: 'absolute',
		zIndex: '10000',
		width: '100%',
	},
	noProductCard: {
		width: '100%',
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		paddingLeft: { xs: '5%', md: '2%' },
		marginTop: { xs: '3%', md: '1.5%' },
		boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
	},
};

export default styles;

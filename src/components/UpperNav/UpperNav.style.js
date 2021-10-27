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
		width: '102%',
	},
	searchResult: {
		position: 'absolute',
		zIndex: '10000',
		width: '100%',
	},
};

export default styles;

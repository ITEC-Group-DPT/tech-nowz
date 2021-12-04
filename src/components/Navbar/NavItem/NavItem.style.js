const styles = {
	navItem: {
		display: 'flex',
		color: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		padding: "8px 5px",
		transition: '400ms',
		borderRadius: '20px',
		'&:hover': {
			backgroundColor: '#737373',
		},
	},
	navItemDrawer: {
		marginRight: '.5rem',
		marginLeft: '.5rem',
		display: 'flex',
		color: 'white',
		justifyContent: 'start',
		padding: '.65rem 1rem',
		transition: '400ms',
		borderRadius: '25px',
	},
	navLink: {
		textDecoration: 'none',
		width: '100%',
		cursor: "pointer"
	},
	icon: {
		'& *': {
			
		},
	},
	navTitle: {
		fontSize: '16px !important',
		fontFamily:"'IBM Plex Serif', serif",
	},
};

export default styles;

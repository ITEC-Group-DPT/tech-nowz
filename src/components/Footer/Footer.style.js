import { colors } from '../../constant';

const styles = {
	footer: {
		backgroundColor: colors.primary,
		color: 'white',
		padding: '25px',
	},
	addressWrapper: {
		display: 'flex',
		justifyContent: 'center',
		mt: 3,
	},
	socialMedia: {
		display: 'flex',
	},
	newsletterWrapper: {
		mt: 3,
		alignItems: 'center',
	},
	newsletter: {
		display: 'flex',
		alignItems: 'end',
	},
	textField: {
		width: '100%',
		color: 'black',
		backgroundColor: 'white',
		borderRadius: '6px',
		padding: '5px 12px',
		fontSize: {
			xs: "15px",
			md: '17px'
		},
	},
	iconWrapper: {
		display: "flex",
		justifyContent: "center",
	},
	icon: {
		fontSize: {
			xs: "30px",
			md: '35px'
		},
	},
	signUp: {
		fontSize: {
			xs: "16px",
			md: '18px'
		},
		textAlign: 'center',
		mb: {
			xs: 3,
			lg: 0,
		},
	},
	btnWrapper: {
		display: {
			xs: 'flex',
			lg: 'block',
		},
		justifyContent: 'center',
	},
	subscribeBtn: {
		fontSize: {
			xs: "15px",
			md: '17px'
		},
		color: 'white',
		border: 'solid 1px #FFFFFF',
		textTransform: 'none',
		padding: '8px 20px',
		ml: {
			xs: 0,
			lg: 4,
		},
		mt: {
			xs: 3,
			lg: 0,
		},
		'&:hover': {
			border: 'solid 1px #FFFFFF',
		},
	},
	address: {
		fontSize: {
			xs: "16px",
			md: '18px'
		},
		textAlign: "center",
	},
	bottomFooter: {
		backgroundColor: 'rgb(41 41 41)',
		display: 'flex',
		justifyContent: 'center',
		padding: '15px',
	},
	copyright: {
		fontSize: {
			xs: "16px",
			md: '18px'
		},
		color: 'white',
	},
};

export default styles;

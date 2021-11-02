import { colors } from '../../constant';

const styles = {
	footer: {
		backgroundColor: colors.primary,
		color: 'white',
		padding: '2rem',
	},
	addressWrapper: {
		display: 'flex',
		justifyContent: 'center',
		mt: 4,
	},
	socialMedia: {
		display: 'flex',
	},
	newsletterWrapper: {
		mt: 4,
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
	},
	icon: {
		fontSize: '2rem',
	},
	signUp: {
		fontSize: '1rem',
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
	bottomFooter: {
		backgroundColor: 'rgb(41 41 41)',
		display: 'flex',
		justifyContent: 'center',
		padding: '1rem',
	},
	copyright: {
		color: 'white',
	},
};

export default styles;

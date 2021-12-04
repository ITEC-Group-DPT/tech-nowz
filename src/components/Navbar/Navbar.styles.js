import { makeStyles } from '@mui/styles';
import { colors } from '../../constant';

const useStyles = makeStyles({
	paper: {
		background: `${colors.primary} !important`,
	},
});

const style = {
	signOutListItem: {
		padding: 0,
	},
	authenWrapper: {
		marginRight: '.5rem',
		marginLeft: '.5rem',
		display: 'flex',
		color: 'white',
		justifyContent: 'start',
		padding: '.8rem 1rem',
		transition: '400ms',
		borderRadius: '25px',
	},
	icon: {
		fontSize: '20px !important',
		marginRight: '7px !important',
	},
	navTitle: {
		fontSize: '.8rem !important',
	},
	navLink: {
		textDecoration: 'none',
		color: 'white',
		width: '100%',
	},
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		padding: '.5rem 1rem',
		transition: '400ms',
		borderRadius: '25px',
		mr: 1,
		'&:hover': {
			backgroundColor: '#737373',
		},
	},
	gridWrapper: {
		display: "flex",
		alignItems: "center",
	},
	btnNav: {
		textDecoration: 'none',
		width: '100%',
	},
	btnWrapper: {
		width: '100%',
		display: 'flex',
		color: 'white',
		justifyContent: 'center',
		padding: "8px 5px",
		transition: '400ms',
		borderRadius: '20px',
		'&:hover': {
			backgroundColor: '#737373',
		},
	},
	iconNav: {
		fontSize: '20px !important',
		marginRight: '7px !important',
		fontFamily:"'IBM Plex Serif', serif",
	},
	titleNav: {
		fontSize: '16px !important',
		textTransform: "none",
		fontFamily:"'IBM Plex Serif', serif"
	},

};

export { useStyles, style };

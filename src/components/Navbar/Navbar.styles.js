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
		fontSize: 'large !important',
		marginRight: '.5rem !important',
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
};

export { useStyles, style };

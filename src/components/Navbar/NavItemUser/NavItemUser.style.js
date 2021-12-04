import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	badge: {
		right: "7px !important",
	},
});

const styles = {
	userItemWrapper: {
		display: 'flex',
		justifyContent: 'end',
		transition: '250ms',
	},
	navItem: {
		marginRight: '.5rem',
		marginLeft: '.5rem',
		display: 'flex',
	},
	navLink: {
		textDecoration: 'none',
		color: 'white',
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
	icon: {
		fontSize: '20px !important',
		marginRight: '7px !important',
		fontFamily:"'IBM Plex Serif', serif",
	},
	navTitle: {
		fontSize: '16px',
		fontFamily:"'IBM Plex Serif', serif",
	},
    btnNav: {
        textTransform: "none",
        textDecoration: 'none',
        color: 'white',
        padding: '.5rem 1rem',
        transition: '400ms',
        borderRadius: '25px',
        mr: 1,
        '&:hover': {
            backgroundColor: '#737373',
        }
    },
};

export { styles, useStyles };

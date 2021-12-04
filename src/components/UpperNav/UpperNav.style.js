import { makeStyles } from '@mui/styles';

const styles = {
	container: {
		padding: {
			xs: '17px 10px',
			md: '17px 20px',
			lg: '17px 150px',
		},
		backgroundColor: 'white',
		position: 'relative',
	},
	logoWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		mb: {
			xs: 2,
			lg: 0,
		}
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
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
		color: 'black',
	},
	icon: {
		fontSize: {
			xs: '22px',
			lg: '25px',
		},
		fontFamily:"'IBM Plex Serif', serif",
	},
	menuTitle: {
		marginLeft: '.7rem',
		fontSize: '18px',
		fontFamily:"'IBM Plex Serif', serif",
	},
	searchComponent: {
		position: 'relative',
	},
	searchBarWrapper: {
		display: 'flex',
		justifyContent: "center",
		mb: {
			xs: 2,
			lg: 0,
		}
	},
	searchBar: {
		width: {
			xs: '90%',
			md: '80%',
			lg: "100%",
		},
	},
	searchResult: {
		position: 'absolute',
		top: {
			xs: '175px',
			lg: '80px',
		},
		left: {
			xs: '0%',
			md: '11%',
			lg: '28.7%',
		},
		width: {
			xs: "100%",
			md: "76%",
			lg: "41.7%",
		},
	},
	btnNav: {
		textTransform: "none",
		textDecoration: 'none',
		color: 'black',
		'&:hover': {
			backgroundColor: 'white',
		}
	},
};

const useStyles = makeStyles({
	root: {
		"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { // normal border
			borderColor: "black",
		},
		"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { // hover border
			borderColor: "black",
		},
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { // focused border
			border: "1px solid black",
		},
	}
})

export { styles, useStyles };

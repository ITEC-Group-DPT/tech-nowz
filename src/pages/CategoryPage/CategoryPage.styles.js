import { makeStyles } from '@mui/styles'

const styles = {
	box: {
		minHeight: '80vh',
		backgroundColor: 'rgb(245, 245, 245)',
		paddingBottom: '100px',
		paddingTop: {
			xs: '30px',
			md: '50px',
		},
	},

	titleWrapper: {
		marginBottom: '25px',
		display: 'flex',
		justifyContent: 'space-between',
	},

	categoryTitle: {
		fontSize: {
			xs: "26px",
			lg: "32px",
		},
		fontWeight: 'bold',
		textAlign: 'start',
	},

	sortByWrapper: {
		display: 'flex',
		alignItems: 'center',
	},

	sortBy: {
		fontSize: {
			xs: "14px",
			md: "17px",
		},
		mr: 1,
	},

	formControl: {
		minWidth: {
			xs: "135px",
			md: "160px",
		},
	},

	select: {
		height: "40px",
		backgroundColor: "white",
		fontSize: {
			xs: "13px",
			md: "16px",
		},
	},

	link: {
		textDecoration: 'none',
		margin: 'auto 0 auto auto',
	},

	paginationWrapper: {
		marginTop: "50px",
		display: 'flex',
		justifyContent: 'center',
	},

	skeleton: {
		bgcolor: '#ededed',
		boxShadow: 'none',
	},
}

const useStyles = makeStyles(() => ({
	ul: {
		"& .MuiPaginationItem-root": {
			marginRight: "10px",
		},
		"& .MuiPaginationItem-root.Mui-selected": {
			backgroundColor: "#333333 !important",
			color: "white !important",
		}
	},

	root: {
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			border: '1px solid black',
		}
	},
}))

export { styles, useStyles }
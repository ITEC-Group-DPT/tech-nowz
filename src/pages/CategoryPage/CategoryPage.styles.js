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
	link: {
		textDecoration: 'none',
		margin: 'auto 0 auto auto',
	},

	paginationWrapper: {
		marginTop: "50px",
		display: 'flex',
		justifyContent: 'center',
	},
}

const useStyles = makeStyles(() => ({
	ul: {
		"& .MuiPaginationItem-root.Mui-selected": {
			backgroundColor: "#333333",
			color: "white",
		}
	}
}))

export { styles, useStyles }
// import { makeStyles } from "@mui/styles"
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
		display: "flex",
		justifyContent: 'space-between',
		alignItems: "center",
		marginBottom: '25px',
	},
	title: {
        fontSize: {
            xs: "26px",
            md: "30px",
        },
        fontWeight: 'bold',
        textAlign: 'center',
    },

	addBtn: {
		textTransform: "none",
		color: "#5b5b5b",
		fontSize: {
			xs: "14px",
			md: "16px",
		},
	},

	dialog: {
		minWidth: "100%",
	},
	skeletonBtn: {
		bgcolor: '#ededed',
	},
}
export default styles
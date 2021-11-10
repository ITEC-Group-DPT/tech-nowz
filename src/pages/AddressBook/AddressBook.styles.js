// import { makeStyles } from "@mui/styles";
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
            lg: "32px",
        },
        fontWeight: 'bold',
        textAlign: 'center',
    },

	addBtn: {
		textTransform: "none",
		color: "#5b5b5b",
		fontSize: "16px",
	},

	dialog: {
		minWidth: "100%",
	}
};
export default styles;
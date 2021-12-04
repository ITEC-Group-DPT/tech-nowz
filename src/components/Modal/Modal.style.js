const styles = {
	main: {
		position: "absolute",
		top: "30%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		bgcolor: "white",
		borderRadius: "4px",
		boxShadow: "rgb(0 0 0 / 24%) 0px 24px 24px 0px, rgb(0 0 0 / 18%) 0px 0px 24px 0px",
		width: {
			xs: "90%",
			md: "35%",
		},
		outline: "none",
	},
	title: {
		//fontFamily: "'Roboto Slab', serif",
		fontWeight: "700",
		fontSize: "20px",
		borderBottom: "1px solid #919191",
		padding: "12px 24px",
		fontFamily:"Roboto Slab",
	},
	description: {
		padding: "16px 24px",
		fontFamily: "'IBM Plex Serif', serif",
	},
	buttonView: {
		display: "flex",
		justifyContent:"flex-end",
		margin: "18px 16px",
		marginTop: 0,
	},
	cancelButton: {
		// flex:1,
		fontSize: "13px",
		textTransform: "Capitalize",
		color: "black !important",
		borderColor: "black !important",
		marginRight: "4px",
	},
	confirmButton: {
		// flex:1,
		fontSize: "13px",
		textTransform: "Capitalize",
		boxShadow: "0 !important",
		background: "#ff2e2e!important",
		marginLeft: "4px",
	},
	outlineButton: {
		fontSize: "13px",
		textTransform: "Capitalize",
		boxShadow: "0 !important",
		marginLeft: "4px",
	},
}

export default styles;
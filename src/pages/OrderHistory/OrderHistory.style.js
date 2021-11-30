const styles = {
	box: {
		minHeight: '100vh',
		backgroundColor: 'rgb(245, 245, 245)',
		paddingBottom: '100px',
        paddingTop: {
			xs: '30px',
			md: '50px',
		},
	},
	title: {
        fontSize: {
            xs: "26px",
            md: "30px",
        },
        fontWeight: 'bold',
        textAlign: 'center',
		marginBottom: "25px",
	},

	isLoadingMain: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	skeletonOrderID: {
		bgcolor: '#ededed',
	},
	skeletonBtn: {
		bgcolor: '#ededed',
	},
	contentDiv: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		padding: '0 !important',
	},
	titleDiv: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		width: { xs: '100%', md: '80%' },
		padding: '0px',
		mb: {
			xs: 1,
			md: 2,
		},
	},
	productList: {
		width: { xs: '100%', md: '80%' },
		display: 'flex',
		flexDirection: 'column',
	},
};

export default styles;

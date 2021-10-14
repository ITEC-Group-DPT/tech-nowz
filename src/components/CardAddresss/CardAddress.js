import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Button,
	Divider,
	CardActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CardAddress = ({ address }) => {
	return (

		<Card variant="outlined" sx={{ minWidth: 275, maxWidth:"80%", my: 2, mx:'auto' }}>
			<CardContent >
				<Typography variant="p" sx={{fontSize:20}} component="div">
					Name: {address.name} <br/>
					Address: {address.address} <br/>
					Phone: {address.phone}
				</Typography>
			</CardContent>
		
			<Divider sx={{ mx: 2 }}></Divider>

			<CardActions sx={{ justifyContent: "flex-end", bgcolor: "#f5f5f5" }}>
				<Button
					variant="outlined"
					size="small"
					color="success"
					startIcon={<DeleteIcon fontSize="small" />}>
					Edit
				</Button>
				<Button
					variant="outlined"
					size="small"
					color="error"
					startIcon={<DeleteIcon fontSize="small" />}>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};
export default CardAddress;

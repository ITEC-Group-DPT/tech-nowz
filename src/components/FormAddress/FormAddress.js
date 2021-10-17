import { React, useState } from "react";
import {
	Input,
	InputLabel,
	Button,
	FormControl,
	FormHelperText,
	Box,
	TextField,
	Container,
} from "@mui/material";
let defaultAddress = {
	deliveryID: 0,
	address: "",
	name: "",
	phone: "",
	userID: 0,
};

const FormAddress = ({ address = defaultAddress, formCommand, setAppear }) => {
	console.log(address, formCommand);
	let arrAddress = address.address.split(", ");
	console.log(arrAddress);
	return (
		<Box sx={{ p: 2, my: 1 }}>
			<FormControl fullWidth="true">
				<TextField
					sx={{ mb: 2 }}
					name="name"
					label="Name"
					placeholder="Type your name here"
					defaultValue={address.name}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="address"
					label="Address"
					placeholder="Type your address here"
					defaultValue={arrAddress[0]}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="address"
					label="Address"
					placeholder="Type your address here"
					defaultValue={arrAddress[1]}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="ward"
					label="Ward"
					placeholder="Type your ward here"
					defaultValue={arrAddress[2]}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="city"
					label="City"
					placeholder="Type your city here"
					defaultValue={arrAddress[3]}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="phone"
					label="Phone"
					placeholder="Type your phone here"
					defaultValue={address.phone}
					variant="standard"
				/>
				<Container sx={{ textAlign: "center" }}>
					<Button
						sx={{ mx: 1 }}
						onClick={() => setAppear(false)}
						variant="outlined"
						size="small"
						color="error">
						Cancel
					</Button>
					<Button
						sx={{ mx: 1 }}
						variant="outlined"
						size="small"
						color="success">
						Submit
					</Button>
				</Container>
			</FormControl>
		</Box>
	);
};

export default FormAddress;

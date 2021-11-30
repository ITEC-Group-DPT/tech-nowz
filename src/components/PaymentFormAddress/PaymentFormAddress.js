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

const FormAddress = ({form,setChosenAddress}) => {
	return (
		<Box sx={{ p: 2, my: 1 }}>
			<FormControl fullWidth="true">
				<TextField
					sx={{ mb: 2 }}
					name="name"
					label="Name"
					onChange={(e) =>
						setChosenAddress({ ...form, name: e.target.value })
					}
					placeholder="Type your name here"
					value={form.name}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="address"
					label="Address"
					onChange={(e) =>
						setChosenAddress({
							...form,
							addressInForm: e.target.value,
						})
					}
					placeholder="Type your address here"
					value={form.addressInForm}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="ward"
					label="Ward"
					placeholder="Type your ward here"
					onChange={(e) =>
						setChosenAddress({ ...form, ward: e.target.value })
					}
					value={form.ward}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="district"
					label="District"
					placeholder="Type your district here"
					onChange={(e) =>
						setChosenAddress({ ...form, district: e.target.value })
					}
					value={form.district}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="city"
					label="City"
					placeholder="Type your city here"
					onChange={(e) =>
						setChosenAddress({ ...form, city: e.target.value })
					}
					value={form.city}
					variant="standard"
				
				/>
				<TextField
					sx={{ mb: 2 }}
					name="phone"
					label="Phone"
					type="number"
					placeholder="Type your phone here"
					onChange={(e) =>
						setChosenAddress({ ...form, phone: e.target.value })
					}
					value={form.phone}
					variant="standard"
				/>
			</FormControl>
		</Box>
	);
};

export default FormAddress;

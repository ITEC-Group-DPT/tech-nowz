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

import { withStyles } from "@mui/styles";

const FormAddress = ({ form, setChosenAddress,classes }) => {
	return (
		<Box sx={{ p: 2, my: 1 }}>
			<FormControl fullWidth="true">
				<TextField
					sx={styles.textData}
					name="name"
					label="Name"
					InputLabelProps={{className: classes.input}}
					inputProps={{ className: classes.input }}
					onChange={(e) =>
						setChosenAddress({ ...form, name: e.target.value })
					}
					placeholder="Type your name here"
					value={form.name}
					variant="standard"
				/>
				<TextField
					sx={styles.textData}
					name="address"
					label="Address"
					onChange={(e) =>
						setChosenAddress({
							...form,
							addressInForm: e.target.value,
						})
					}
					InputLabelProps={{className: classes.input}}
					inputProps={{ className: classes.input }}
					placeholder="Type your address here"
					value={form.addressInForm}
					variant="standard"
				/>
				<TextField
					sx={styles.textData}
					name="ward"
					label="Ward"
					placeholder="Type your ward here"
					onChange={(e) =>
						setChosenAddress({ ...form, ward: e.target.value })
					}
					InputLabelProps={{className: classes.input}}
					inputProps={{ className: classes.input }}
					value={form.ward}
					variant="standard"
				/>
				<TextField
					sx={styles.textData}
					name="district"
					label="District"
					placeholder="Type your district here"
					onChange={(e) =>
						setChosenAddress({ ...form, district: e.target.value })
					}
					InputLabelProps={{className: classes.input}}
					inputProps={{ className: classes.input }}
					value={form.district}
					variant="standard"
				/>
				<TextField
					sx={styles.textData}
					name="city"
					label="City"
					placeholder="Type your city here"
					onChange={(e) =>
						setChosenAddress({ ...form, city: e.target.value })
					}
					InputLabelProps={{className: classes.input}}
					inputProps={{ className: classes.input }}
					value={form.city}
					variant="standard"

				/>
				<TextField
					sx={styles.textData}
					name="phone"
					label="Phone"
					type="tel"

					placeholder="Type your phone here"
					onChange={(e) =>
						setChosenAddress({ ...form, phone: e.target.value })
					}
					InputLabelProps={{className: classes.input}}
					inputProps={{ className: classes.input }}
					value={form.phone}
					variant="standard"
				/>
			</FormControl>
		</Box>
	);
};

const styles = {
	textData: {
		mb: 2,	
		fontSize:"50px",
	},
}

const muiStyles = {
	input: {
		"&:-webkit-autofill": {
		  WebkitBoxShadow: "0 0 0 1000px white inset"
		},
		fontSize: "17px !important",
	}
}

export default withStyles(muiStyles)(FormAddress);

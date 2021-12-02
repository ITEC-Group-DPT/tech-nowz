import { React, useState } from "react";
import { Box } from "@mui/system";
import { FormControlLabel, Radio, Typography, Button } from "@mui/material";

const RadioAddressPayment = ({
	onClickAddress,
	chosenAddress,
	address = { deliveryID: -1 },
	disabled,
}) => {
	return (
		<Button
			disabled={disabled}
			variant="outlined"
			sx={styles.main}
			onClick={() => disabled == false && onClickAddress(address.deliveryID)}>
			<Radio
				checked={chosenAddress == address.deliveryID}
				value={address.deliveryID}
				name={address.deliveryID}
				disabled={disabled}
			// inputProps={{ "aria-label": "A" }}
			/>
			{address.deliveryID == -1 ? (
				<Typography
					variant="p"
					sx={styles.addressText}
					component="div"
				>
					New Address
				</Typography>
			) : (
				<Typography
					variant="p"
					sx={styles.addressText}
					component="div"
				>
					<b>Name:</b> {address.name} <br />
					<b>Address:</b> {address.address} <br />
					<b>Phone:</b> {address.phone}
				</Typography>
			)}
		</Button>
	);
};

const styles = {
	main: {
		display: "flex",
		alignItems: "center",
		justifyContent:"flex-start",
		color:"black !important",
		textTransform:"capitalize",
		mb: "12px",
		padding: "8px 6px",
		paddingRight: "10px",
		border: 1,
		borderColor: "black !important",
		width: "fit-content",
		cursor: "pointer",
		userSelect: "none",
		textAlign:"start",
	},
	addressText: {
		fontSize: "13px",
		fontFamily: "'Montserrat', sans-serif",
	},
}
export default RadioAddressPayment;

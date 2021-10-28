import { React, useState } from "react";
import { Box } from "@mui/system";
import { FormControlLabel, Radio, Typography } from "@mui/material";

const RadioAddressPayment = ({
	onClickAddress,
	chosenAddress,
	address = { deliveryID: -1 },
	disabled,
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				m: 1,
				pr: 2,
				border: 1,
				width: "fit-content",
				borderRadius: 1,
			}}
			onClick={() => disabled == false && onClickAddress(address.deliveryID)}>
			<Radio
				checked={chosenAddress == address.deliveryID}
				value={address.deliveryID}
				name={address.deliveryID}
				disabled={disabled}
				// inputProps={{ "aria-label": "A" }}
			/>
			{address.deliveryID == -1 ? (
				<Typography variant="p" sx={{ fontSize: 16 }} component="div">
					New Address
				</Typography>
			) : (
				<Typography variant="p" sx={{ fontSize: 16 }} component="div">
					Name: {address.name} <br />
					Address: {address.address} <br />
					Phone: {address.phone}
				</Typography>
			)}
		</Box>
	);
};
export default RadioAddressPayment;

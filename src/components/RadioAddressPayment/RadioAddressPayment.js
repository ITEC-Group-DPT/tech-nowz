import { React, useState } from "react";
import { Box } from "@mui/system";
import { FormControlLabel, Radio, Typography } from "@mui/material";

const RadioAddressPayment = ({
	onClickAddress,
    chosenAddress,
	address = { deliveryID: -1 },
	disabled = false,
}) => {
	return (
		<Box
			sx={{ display: "flex", alignItems: "center" }}
			onClick={()=> onClickAddress(address.deliveryID)}>
			<Radio
				checked={chosenAddress == address.deliveryID}
				value={address.deliveryID}
				name={address.deliveryID}
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

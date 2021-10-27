import { React, useState } from "react";
import { Box } from "@mui/system";
import { FormControlLabel,Radio,Typography } from '@mui/material';

const RadioAddressPayment = ({
	onClick,
	address = { deliveryID: -1 },
	disabled = false,
}) => {
	return (
		<Box
			sx={{ display: "flex", alignItems: "center" }}
			onClick={() => onClick(address.deliveryID)}>
			<FormControlLabel
				value={`${address.deliveryID}`}
				control={<Radio disabled={disabled} />}
				label={`${address.deliveryID}`}
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

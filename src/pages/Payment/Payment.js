import { React, useState } from "react";
import {
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CardAddress from "../../components/CardAddresss/CardAddress";
import { getAddressBook, createAddressBook } from "../../api/addressApi";

const address = [
	{
		deliveryID: 34,
		address:
			"57, Nguyễn Cửu Đàm, phường Tân Sơn Nhì, quận Tân Phú, tan son nhì, Thành phố Hồ Chí Minh, Vietnam",
		name: "qwe",
		phone: "0945461850",
		userID: 17,
	},
	{
		deliveryID: 36,
		address: "111",
		name: "112",
		phone: "121212",
		userID: 17,
	},
	{
		deliveryID: 37,
		address: "57 Nguyễn Cửu Đàm, asd, asd, Ho Chi Minh City",
		name: "Trương Minh Nam Phú",
		phone: "+84945461850",
		userID: 17,
	},
	{
		deliveryID: 38,
		address: "asd, asd, asd, ads",
		name: "asd",
		phone: "+84945461850",
		userID: 17,
	},
	{
		deliveryID: 39,
		address: "sd, sd, sd, sdsd",
		name: "sd",
		phone: "sdsd",
		userID: 17,
	},
];
const Payment = () => {
	const [chosenAddress, setChosenAddress] = useState("-1"); //-1 is default, create new address
	const [disabledAddress, setDisabledAddress] = useState(false);

	function onChangeRadioBtn(e) {
		console.log(e.target.value);
		setChosenAddress(e.target.value);
	}

	return (
		<div>
			<FormControl sx={{ px: "5rem", mt: "2rem" }} component="fieldset">
				<Typography
					variant="h5"
					sx={{ fontWeight: "600" }}
					component="div">
					Address Book
				</Typography>
				<Typography variant="p" component="div">
					(you can edit exists address book by choosing and editing
					below)
				</Typography>
				<RadioGroup
					aria-label="gender"
					name="controlled-radio-buttons-group"
					value={chosenAddress}
					onChange={onChangeRadioBtn}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<FormControlLabel
							value="-1"
							control={<Radio />}
							label=""
						/>
						<Typography
							variant="p"
							sx={{ fontSize: 16 }}
							component="div">
							New Address
						</Typography>
					</Box>

					<Box
						sx={{ display: "flex", alignItems: "center" }}
						onClick={()=> setChosenAddress("0")}>
						<FormControlLabel
							value="0"
							control={<Radio />}
							label=""
						/>
						<Typography
							variant="p"
							sx={{ fontSize: 16 }}
							component="div">
							Name: {address[0].name} <br />
							Address: {address[0].address} <br />
							Phone: {address[0].phone}
						</Typography>
					</Box>
				</RadioGroup>
			</FormControl>
		</div>
	);
};

export default Payment;

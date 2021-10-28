import { React, useState } from "react";
import {
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Typography,
	Container,
} from "@mui/material";
import { Box } from "@mui/system";
import CardAddress from "../../components/CardAddresss/CardAddress";
import { getAddressBook, createAddressBook } from "../../api/addressApi";
import RadioAddressPayment from "../../components/RadioAddressPayment/RadioAddressPayment";
import PaymentStepper from "../../components/PaymentStepper/PaymentStepper";
import FormAddress from "../../components/FormAddress/FormAddress";
import AddressBook from "../AddressBook/AddressBook";

// const addressBook = [
// 	{
// 		deliveryID: 34,
// 		address:
// 			"57, Nguyễn Cửu Đàm, phường Tân Sơn Nhì, quận Tân Phú, tan son nhì, Thành phố Hồ Chí Minh, Vietnam",
// 		name: "qwe",
// 		phone: "0945461850",
// 		userID: 17,
// 	},
// 	{
// 		deliveryID: 36,
// 		address: "111",
// 		name: "112",
// 		phone: "121212",
// 		userID: 17,
// 	},
// 	{
// 		deliveryID: 37,
// 		address: "57 Nguyễn Cửu Đàm, asd, asd, Ho Chi Minh City",
// 		name: "Trương Minh Nam Phú",
// 		phone: "+84945461850",
// 		userID: 17,
// 	},
// 	{
// 		deliveryID: 38,
// 		address: "asd, asd, asd, ads",
// 		name: "asd",
// 		phone: "+84945461850",
// 		userID: 17,
// 	},
// 	{
// 		deliveryID: 39,
// 		address: "sd, sd, sd, sdsd",
// 		name: "sd",
// 		phone: "sdsd",
// 		userID: 17,
// 	},
// ];
const Payment = () => {
	const [addressBook, setAddressBook] = useState([
		{
			deliveryID: 31,
			address: "turơng minh, nam Phú 123, PSd, ướerwerwerwer",
			name: "phú trương",
			phone: "123123wer",
			userID: 14,
		},
		{
			deliveryID: 46,
			address: "yt, yty, tyt, yty",
			name: "123",
			phone: "7832736178238123",
			userID: 14,
		},
	]);
	const [chosenIDAddress, setChosenIDAddress] = useState(-1); //-1 is default, create new address, for radio
	const [chosenAddress, setchosenAddress] = useState();
	const [disableAddress, setDisableAddress] = useState(false);

	function onClickRadioBtn(id) {
		console.log(id);
		if (id == -1) {
			setChosenIDAddress(-1);
			setchosenAddress();
		} else {
			setChosenIDAddress(id);
			let indexbyid = addressBook.findIndex(
				(address) => address.deliveryID == id
			);
			// let address = JSON.parse(JSON.stringify(addressBook[indexbyid]))
			// console.log(addressBook[indexbyid]);
			// console.log(chosenIDAddress);
			setchosenAddress(addressBook[indexbyid]);
			// console.log(indexOfAddress);
		}
	}

	return (
		<div>
			<Container sx={{ mt: 2 }}>
				<Typography
					variant="h4"
					sx={{ fontWeight: "600" }}
					component="div">
					Address Book
				</Typography>
				<Typography variant="p" component="div">
					(you can edit exists address book by choosing and editing
					below)
				</Typography>
				{/* newAddress */}
				<RadioAddressPayment
					onClickAddress={onClickRadioBtn}
					chosenAddress={chosenIDAddress}
					disabled={disableAddress}
				/>
				{addressBook.map((address) => (
					<RadioAddressPayment
						chosenAddress={chosenIDAddress}
						address={address}
						onClickAddress={onClickRadioBtn}
						disabled={disableAddress}
					/>
				))}
			</Container>
		
			{/* <FormAddress address={chosenAddress} /> */}
		
			{/* <FormAddress address={indexOfAddress}/> */}

			<PaymentStepper address={chosenAddress}/>
		</div>
	);
};

export default Payment;

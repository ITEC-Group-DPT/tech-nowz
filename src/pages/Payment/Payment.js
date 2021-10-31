import { React, useState } from "react";
import {
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Typography,
	Container,
	Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import CardAddress from "../../components/CardAddresss/CardAddress";
import { getAddressBook, createAddressBook } from "../../api/addressApi";
import RadioAddressPayment from "../../components/RadioAddressPayment/RadioAddressPayment";
import PaymentStepper from "../../components/PaymentStepper/PaymentStepper";
import FormAddress from "../../components/FormAddress/FormAddress";
import AddressBook from "../AddressBook/AddressBook";

const addressBook =[
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
]

const emptyAddress = {
	name: "",
	addressInForm: "",
	ward: "",
	district: "",
	city: "",
	phone: "",
};
const Payment = () => {
	const [addressBook, setAddressBook] = useState([]);

	useEffect(() => {
		getAddressBook().then((res) => {
			if (res.data.success == true) 
			setAddressBook(res.data.data);
		});
	}, [])
	const [chosenIDAddress, setChosenIDAddress] = useState(-1); //-1 is default, create new address, for radio
	const [chosenAddress, setChosenAddress] = useState(emptyAddress);
	const [disableAddress, setDisableAddress] = useState(false);
	function processingAddress(address) {
		let arrAddress = address.address.split(", ");
		while (arrAddress.length < 4) {
			//for error process
			arrAddress.push("");
		}
		return {
			name: address.name,
			addressInForm: arrAddress[0],
			ward: arrAddress[1],
			district: arrAddress[2],
			city: arrAddress[3],
			phone: address.phone,
		};
	}
	function onClickRadioBtn(id) {
		console.log(id);
		if (id == -1) {
			setChosenIDAddress(-1);
			setChosenAddress(emptyAddress);
		} else {
			setChosenIDAddress(id);
			let indexbyid = addressBook.findIndex(
				(address) => address.deliveryID == id
			);

			// let addressbyid = JSON.parse(JSON.stringify(addressBook[indexbyid]))
			// console.log(addressBook[indexbyid]);
			// console.log(chosenIDAddress);

			setChosenAddress(processingAddress(addressBook[indexbyid]));
			// console.log(indexOfAddress);
		}
	}

	return (
		<Box sx={{minHeight:"65%"}}>
			<Container sx={{ my: 2 }}>
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
			<Divider />
			{/* <FormAddress address={chosenAddress} /> */}

			{/* <FormAddress address={indexOfAddress}/> */}

			<PaymentStepper
				address={chosenAddress}
				setAddress={setChosenAddress}
				setDisableAddress={setDisableAddress}
			/>
		</Box>
	);
};

export default Payment;

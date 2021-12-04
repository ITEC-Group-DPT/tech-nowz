import { React, useState, useEffect } from "react";
import {
	Typography,
	Container,
	Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import { getAddressBook, createAddressBook } from "../../api/addressApi";

import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/selectors"

import RadioAddressPayment from "../../components/RadioAddressPayment/RadioAddressPayment";
import PaymentStepper from "../../components/PaymentStepper/PaymentStepper";
import styles from "./Payment.style"

const emptyAddress = {
	name: "",
	addressInForm: "",
	ward: "",
	district: "",
	city: "",
	phone: "",
};

const Payment = () => {

	const history = useHistory();
	const cart = useSelector(cartSelector);
	const [addressBook, setAddressBook] = useState([]);

	useEffect(() => {
		if (cart.totalQuantity === 0) {
			history.push("/error")
		}
		getAddressBook().then((res) => {
			if (res.data.success == true) setAddressBook(res.data.data);
		});
	}, []);

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
		if (id == -1) {
			setChosenIDAddress(-1);
			setChosenAddress(emptyAddress);
		} else {
			setChosenIDAddress(id);
			let indexbyid = addressBook.findIndex(
				(address) => address.deliveryID == id
			);

			setChosenAddress(processingAddress(addressBook[indexbyid]));
		}
	}

	return (
		<Box sx={{ minHeight: "65%" }}>
			<Container sx={styles.addressbook}>
				<Typography
					variant="h4"
					sx={{ fontWeight: "600" }}
					component="div">
					Address Book
				</Typography>
				<Typography
					sx={{ mb: "18px" }}
					variant="p"
					component="div"
				>
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
			{
				cart.cartList &&
				<PaymentStepper
					idaddress={chosenIDAddress}
					address={chosenAddress}
					setAddress={setChosenAddress}
					setDisableAddress={setDisableAddress}
					cart={cart}
				/>
			}
		</Box>
	);
};

export default Payment;

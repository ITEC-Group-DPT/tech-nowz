import { React, useState, useEffect } from "react";
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
import styles from './FormAddress.styles'
import {checkEmptyForm} from "../../constant/function";
import { createAddressBook, editAddressBook } from "../../api/addressApi";

let defaultAddress = {
	deliveryID: 0,
	address: "",
	name: "",
	phone: "",
	userID: 0,
};
const FormAddress = ({
	address = defaultAddress,
	formCommand,
	formSubmit,
	setAppear,
	paymentChooseNewAddress = false,
}) => {
	// console.log(address);
	let arrAddress = ["", "", "", ""];
	const [form, setFormAddress] = useState({
		name: "",
		addressInForm: "",
		ward: "",
		district: "",
		city: "",
		phone: "",
	});

	useEffect(() => {
		arrAddress = address.address.split(", ");
		while (arrAddress.length < 4) {
			//for error process
			arrAddress.push("");
		}
		//if (arrAddress.length == 1) arrAddress = ["","","",""] //for change textfield
		setFormAddress({
			name: address.name,
			addressInForm: arrAddress[0],
			ward: arrAddress[1],
			district: arrAddress[2],
			city: arrAddress[3],
			phone: address.phone,
		});
	}, [address]);
	// const [addressForm,setAddress] = useState(arrAddress[0])
	// const [ward,setWard] = useState(arrAddress[1])
	// const [district,setDistrict] = useState(arrAddress[2])
	// const [city,setCity] = useState(arrAddress[3])
	// const [phone,setPhone] = useState(address.phone)

	function handleSubmit(e) {
		e.preventDefault();
		if (checkEmptyForm(form) == false) {
			console.log('empty input');
			return;
		}
		let id = address.deliveryID;
		let joinAddress =
			form.addressInForm +
			", " +
			form.ward +
			", " +
			form.district +
			", " +
			form.city;

		if (formCommand == "create") {
			createAddressBook(form.name, joinAddress, form.phone).then(
				(res) => {
					// console.log(res);
					if (res.data.success == true) {
						let id = res.data.data;
						formSubmit(id, form.name, joinAddress, form.phone);
						setAppear(false);
					}
				}
			);
		} else if (formCommand == "edit") {
			editAddressBook(id, form.name, joinAddress, form.phone).then(
				(res) => {
					console.log(res);
					if (res.data.success == true) {
						formSubmit(id, form.name, joinAddress, form.phone);
						setAppear(false);
					}
				}
			);
		}
	}
	return (
		<Box sx={styles.box}>
			<FormControl fullWidth="true">
				<TextField
					sx={styles.textField}
					name="name"
					label="Name"
					onChange={(e) =>
						setFormAddress({ ...form, name: e.target.value })
					}
					placeholder="Your full name"
					value={form.name}
					variant="outlined"
					inputProps={{style: {fontSize: "17px"}}}
				/>
				<TextField
					sx={styles.textField}
					name="address"
					label="Address"
					onChange={(e) =>
						setFormAddress({
							...form,
							addressInForm: e.target.value,
						})
					}
					placeholder="Your address (House number, street name)"
					value={form.addressInForm}
					variant="outlined"
					inputProps={{style: {fontSize: "17px"}}}
				/>
				<TextField
					sx={styles.textField}
					name="ward"
					label="Ward"
					placeholder="Your ward"
					onChange={(e) =>
						setFormAddress({ ...form, ward: e.target.value })
					}
					value={form.ward}
					variant="outlined"
					inputProps={{style: {fontSize: "17px"}}}
				/>
				<TextField
					sx={styles.textField}
					name="district"
					label="District"
					placeholder="Your district"
					onChange={(e) =>
						setFormAddress({ ...form, district: e.target.value })
					}
					value={form.district}
					variant="outlined"
					inputProps={{style: {fontSize: "17px"}}}
				/>
				<TextField
					sx={styles.textField}
					name="city"
					label="City"
					placeholder="Your city name"
					onChange={(e) =>
						setFormAddress({ ...form, city: e.target.value })
					}
					value={form.city}
					variant="outlined"
				/>
				<TextField
					sx={styles.textField}
					name="phone"
					label="Phone"
					type="number"
					placeholder="Type your phone here"
					onChange={(e) =>
						setFormAddress({ ...form, phone: e.target.value })
					}
					value={form.phone}
					variant="outlined"
					inputProps={{style: {fontSize: "17px"}}}
				/>
				<Container sx={{ textAlign: "center", mt: 2 }}>
					{paymentChooseNewAddress == false && (
						<Button
							sx={styles.cancelBtn}
							onClick={() => setAppear(false)}
							size="small"
						>
							Cancel
						</Button>
					)}
					<Button
						sx={styles.submitBtn}
						onClick={(e) => handleSubmit(e)}
						size="small"
						type="submit"
					>
						Submit
					</Button>
				</Container>
			</FormControl>
		</Box>
	);
};

export default FormAddress;

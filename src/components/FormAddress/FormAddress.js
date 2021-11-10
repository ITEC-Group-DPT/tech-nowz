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
	let arrAddress = ["","","",""];
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
		while (arrAddress.length < 4) { //for error process 
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
	}, [address])
	// const [addressForm,setAddress] = useState(arrAddress[0])
	// const [ward,setWard] = useState(arrAddress[1])
	// const [district,setDistrict] = useState(arrAddress[2])
	// const [city,setCity] = useState(arrAddress[3])
	// const [phone,setPhone] = useState(address.phone)
	function test(){
		console.log(1);
	}
	function handleSubmit(e) {
		e.preventDefault();
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
		<Box sx={{ p: 2, my: 1 }}>
			<FormControl fullWidth="true">
				<TextField
					sx={{ mb: 2 }}
					name="name"
					label="Name"
					onChange={(e) =>
						setFormAddress({ ...form, name: e.target.value })
					}
					placeholder="Type your name here"
					value={form.name}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="address"
					label="Address"
					onChange={(e) =>
						setFormAddress({
							...form,
							addressInForm: e.target.value,
						})
					}
					placeholder="Type your address here"
					value={form.addressInForm}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="ward"
					label="Ward"
					placeholder="Type your ward here"
					onChange={(e) =>
						setFormAddress({ ...form, ward: e.target.value })
					}
					value={form.ward}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="district"
					label="District"
					placeholder="Type your district here"
					onChange={(e) =>
						setFormAddress({ ...form, district: e.target.value })
					}
					value={form.district}
					variant="standard"
				/>
				<TextField
					sx={{ mb: 2 }}
					name="city"
					label="City"
					placeholder="Type your city here"
					onChange={(e) =>
						setFormAddress({ ...form, city: e.target.value })
					}
					value={form.city}
					variant="standard"
					
				/>
				<TextField
					sx={{ mb: 2 }}
					name="phone"
					label="Phone"
					type="number"
					placeholder="Type your phone here"
					onChange={(e) =>
						setFormAddress({ ...form, phone: e.target.value })
					}
					value={form.phone}
					variant="standard"
				/>
				<Container sx={{ textAlign: "center" }}>
					{paymentChooseNewAddress == false && (
						<Button
							sx={{ mx: 1 }}
							onClick={() => setAppear(false)}
							variant="outlined"
							size="small"
							color="error">
							Cancel
						</Button>
					)}
					<Button
						sx={{ mx: 1 }}
						onClick={(e) => handleSubmit(e)}
						variant="outlined"
						size="small"
						type="submit"
						color="success">
						Submit
					</Button>
				</Container>
			</FormControl>
		</Box>
	);
};

export default FormAddress;

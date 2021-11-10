import { React, useState, useEffect } from "react";
import {
	Box,
	Container,
	Typography,
	Button,
	Divider,
	Modal,
} from "@mui/material";
import CardAddress from "../../components/CardAddresss/CardAddress";
import FormAddress from "../../components/FormAddress/FormAddress";
import styles from "./addressbook.style";
import { getAddressBook, deleteAddressBook } from "../../api/addressApi";
// import axios from "axios";
const AddressBook = () => {
	const [modelAppear, setModelAppear] = useState(false);
	const [addressBook, setAddressBook] = useState([]);

	useEffect(() => {
		getaddress();
	}, []);

	function getaddress() {
		getAddressBook().then((res) => {
			if (res.data.success == true) setAddressBook(res.data.data);
		});
	}

	// function onSubmit(command,)
	function onCreate(id, name, address, phone) {
		let obj = {
			deliveryID: id,
			address: address,
			name: name,
			phone: phone,
		};
		let newLs = addressBook;
		newLs.push(obj);
		setAddressBook(newLs);
	}
	function onEdit(id, name, address, phone) {
		let obj = {
			deliveryID: id,
			address: address,
			name: name,
			phone: phone,
		};

		let indexbyid = addressBook.findIndex(
			(address) => address.deliveryID == id
		);
		let newLs = JSON.parse(JSON.stringify(addressBook));

		newLs[indexbyid] = obj;

		setAddressBook(newLs);
	}
	function onDelete(id) {
		deleteAddressBook(id).then((res) => {
			if (res.data.success == true) {
				const newLs = addressBook.filter(
					(address) => address.deliveryID !== id
				);
				setAddressBook(newLs);
			}
		});
	}

	return (
		<div>
			<Box sx={{ textAlign: "center", py: 10, bgcolor: "#e9ecef" }}>
				<Typography
					variant="h1"
					sx={{
						fontWeight: "500",
						fontSize: { xs: "50px", md: "80px", lg: "100px" },
					}}
					component="div">
					Address Book
				</Typography>
			</Box>
			<Container>
				<Divider />
				{addressBook.map((address) => (
					<CardAddress
						address={address}
						key={address.deliveryID}
						onEdit={onEdit}
						onDelete={onDelete}
					/>
				))}
			</Container>
			<Box sx={{ textAlign: "center", m: 2 }}>
				<Button variant="outlined" onClick={() => setModelAppear(true)}>
					Create new Address
				</Button>
			</Box>
			<Modal open={modelAppear} onClose={() => setModelAppear(false)}>
				<Box sx={styles.modal}>
					<Box sx={{ textAlign: "center" }}>
						<Typography
							variant="h4"
							sx={{ fontWeight: "500" }}
							component="div">
							New address
						</Typography>
					</Box>
					<FormAddress
						formCommand="create"
						formSubmit={onCreate}
						setAppear={setModelAppear}
					/>
				</Box>
			</Modal>
		</div>
	);
};

export default AddressBook;

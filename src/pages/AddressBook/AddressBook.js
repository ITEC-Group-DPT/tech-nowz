import { React, useState, useEffect } from "react";
import {
	Box,
	Container,
	Typography,
	Button,
	Dialog, DialogTitle,
	Collapse,
	Divider,
	Modal,
} from "@mui/material";
import CardAddress from "../../components/CardAddresss/CardAddress";
import FormAddress from "../../components/FormAddress/FormAddress";
import icons from "../../constant/icons";
import { TransitionGroup } from 'react-transition-group';
import styles from "./AddressBook.styles"
import { getAddressBook, deleteAddressBook } from "../../api/addressApi";

const AddressBook = () => {
	const [modelAppear, setModelAppear] = useState(false);
	const [addressBook, setAddressBook] = useState([]);

	useEffect(() => {
		getAddress();
	}, []);

	const getAddress = () => {
		getAddressBook().then((res) => {
			if (res.data.success == true)
				setAddressBook(res.data.data);
		});
	}

	const onCreate = (id, name, address, phone) => {
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

	const onEdit = (id, name, address, phone) => {
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

	const onDelete = (id) => {
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
		<Box sx={styles.box}>
			<Container maxWidth="md">
				<Box sx={styles.titleWrapper}>
					<Typography sx={styles.title}>Address Book</Typography>
					<Button
						startIcon={<icons.Add />}
						onClick={() => setModelAppear(true)}
						sx={styles.addBtn}
					>
						New address
					</Button>
				</Box>
				<TransitionGroup>
					{addressBook.map(address =>
						<Collapse key={address.deliveryID}>
							<CardAddress
								address={address}
								key={address.deliveryID}
								onEdit={onEdit}
								onDelete={onDelete}
							/>
						</Collapse>
					)}
				</TransitionGroup>
			</Container>
			<Dialog
				open={modelAppear}
				onClose={() => setModelAppear(false)}
				sx={styles.dialog}
			>
				<DialogTitle sx={{ textAlign: "center" }}>New Address</DialogTitle>
				<FormAddress
					formCommand="create"
					formSubmit={onCreate}
					setAppear={setModelAppear}
				/>
			</Dialog>
		</Box>
	);
};

export default AddressBook;

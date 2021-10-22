import { React, useState } from "react";
import {
	FormControl,
	InputLabel,
	Input,
	Box,
	Container,
	FormHelperText,
	Card,
	Typography,
	CardContent,
	Button,
	CardActions,
	Divider,
	Modal,
} from "@mui/material";
import CardAddress from "../../components/CardAddresss/CardAddress";
import FormAddress from "../../components/FormAddress/FormAddress";
import styles from "./addressbook.style";
// import axios from "axios";
const AddressBook = () => {
	const [modelAppear, setModelAppear] = useState(false);
	const [addressBook, setAddressBook] = useState([
		{
			deliveryID: 19,
			address: "Huỳnh Văn Bánh, P.13, Phu Nhuan, Ho Chi Minh",
			name: "Minh Đạo",
			phone: "0785031700",
			userID: 13,
		},
		{
			deliveryID: 20,
			address: "471 Tung Thien Vuong Street, 12, 8, HCM City",
			name: "hehe",
			phone: "0822453279",
			userID: 13,
		},
	]);
	//   axios
	//     .get(
	//       "http://technowdb.phuhanh.com.vn/api/deliAPi.php?command=getdelivery&userID=13"
	//     )
	//     .then((res) => {
	//       setAddressBook(res.data)
	//     });
	
	return (
		<div>
			<Box sx={{ textAlign: "center", py: 10, bgcolor: "#e9ecef" }}>
				<Typography
					variant="h1"
					sx={{ fontWeight: "500", fontSize:{xs:'50px',md:'80px',lg:'100px'} }}
					component="div">
					Address Book
				</Typography>
			</Box>
			<Container>
				<Divider />
				{addressBook.map((address) => (
					<CardAddress address={address} key={address.deliveryID} />
				))}
			</Container>
			<Box sx={{ textAlign: "center", m: 2 }}>
				<Button variant="outlined" onClick={() => setModelAppear(true)}>
					Create new Address
				</Button>
			</Box>
			<Modal open={modelAppear} onClose={() => setModelAppear(false)}>
				<Box sx={styles.modal}>
					<Box sx={{ textAlign: "center"}}>
						<Typography
							variant="h4"
							sx={{ fontWeight: "500" }}
							component="div">
							New address
						</Typography>
					</Box>
					<FormAddress
						formCommand="edit"
						setAppear={setModelAppear}
					/>
				</Box>
			</Modal>
		</div>
	);
};

export default AddressBook;

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
} from "@mui/material";
import CardAddress from "../../components/CardAddresss/CardAddress";
// import axios from "axios";
const AddressBook = () => {
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
					sx={{ fontWeight: "500" }}
					component="div">
					Address Book
				</Typography>
			</Box>
			<Container>
				<Divider />
				{addressBook.map((address) => (
					<CardAddress address={address} key={address.deliveryID} />
				))}
				<FormControl fullWidth="true">
					<InputLabel htmlFor="my-input">Email address</InputLabel>
					<Input id="my-input" aria-describedby="my-helper-text" />
				</FormControl>
			</Container>
		</div>
	);
};

export default AddressBook;

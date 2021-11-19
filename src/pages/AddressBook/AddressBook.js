import { React, useState, useEffect } from "react"
import {
	Box,
	Container,
	Typography,
	Button,
	Dialog, DialogTitle,
	Collapse,
	Skeleton,
} from "@mui/material"
import CardAddress from "../../components/CardAddresss/CardAddress"
import FormAddress from "../../components/FormAddress/FormAddress"
import icons from "../../constant/icons"
import { TransitionGroup } from 'react-transition-group'
import styles from "./AddressBook.styles"
import { getAddressBook, deleteAddressBook } from "../../api/addressApi"
import HorizontalProductSkeleton from "../../components/HorizontalProductSkeleton/HorizontalProductSkeleton"
import EmptyList from "../../components/EmptyList/EmptyList"
import emptyAddress from "../../img/empty-address.png"

const AddressBook = () => {
	const [modelAppear, setModelAppear] = useState(false)
	const [addressList, setAddressList] = useState({ "isLoading": true })

	useEffect(() => {
		getAddress()
	}, [])

	const getAddress = () => {
		getAddressBook().then((response) => {
			if (response.data.success == true) {
				setAddressList({ "isLoading": false, "data": response.data.data })
				console.log("addressList: ", response.data.data)
			}
		})
	}

	const onCreate = (id, name, address, phone) => {
		let obj = {
			deliveryID: id,
			address: address,
			name: name,
			phone: phone,
		}
		let newLs = addressList.data
		newLs.push(obj)
		setAddressList({ ...addressList, data: newLs })
	}

	const onEdit = (id, name, address, phone) => {
		let obj = {
			deliveryID: id,
			address: address,
			name: name,
			phone: phone,
		}

		let indexbyid = addressList.data.findIndex(
			(address) => address.deliveryID == id
		)
		let newLs = JSON.parse(JSON.stringify(addressList.data))

		newLs[indexbyid] = obj

		setAddressList({ ...addressList, data: newLs })
	}

	const onDelete = (id) => {
		deleteAddressBook(id).then((res) => {
			if (res.data.success == true) {
				const newLs = addressList.data.filter((address) => address.deliveryID !== id)
				setAddressList({ ...addressList, data: newLs })
			}
		})
	}

	return (
		<Box sx={styles.box}>
			<Container maxWidth="md">
				<Box sx={styles.titleWrapper}>
					{addressList.isLoading ? (
						<>
							<Typography sx={styles.title}>Address Book</Typography>
							<Skeleton variant="text" animation="wave" sx={styles.skeletonBtn}>
								<Button
									startIcon={<icons.Add />}
									sx={styles.addBtn}
								>
									New address
								</Button>
							</Skeleton>
						</>
					) : (
						<>
							<Typography sx={styles.title}>Address Book</Typography>
							<Button
								startIcon={<icons.Add />}
								onClick={() => setModelAppear(true)}
								sx={styles.addBtn}
							>
								New address
							</Button>
						</>
					)}
				</Box>

				{addressList.isLoading ? (
					<>
						<HorizontalProductSkeleton />
						<HorizontalProductSkeleton />
					</>
				) : (
					<>
						{addressList.data && addressList.data.length === 0 ? (
							<EmptyList img={emptyAddress} title={"Your address list is empty"} imgHeight={'45vh'} btnMarginTop={"5vh"} />
						) : (
							<>


								<TransitionGroup>
									{addressList.data.map(address =>
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
							</>
						)}
					</>
				)}

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
	)
}

export default AddressBook

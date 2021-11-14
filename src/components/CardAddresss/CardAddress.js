import { React, useState } from "react";
import styles from './CardAddress.styles'
import {
	Card,
	CardContent,
	Typography,
	Button,
	IconButton,
	Box,
	CardActions,
	Container,
	FormControl,
	Input,
	InputLabel,
	Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from "@mui/material";
import icons from "../../constant/icons";
import { ExitToAppSharp } from "@mui/icons-material";
import FormAddress from "../FormAddress/FormAddress";
import { style } from "@mui/system";

const CardAddress = ({ address, onDelete, onEdit, btnAppear = true }) => {
	const [modelAppear, setModelAppear] = useState(false);
	return (
		<Card sx={styles.addressCard}>
			<CardContent>
				<Box sx={styles.infoWrapper}>
					<Typography sx={styles.title}>Customer</Typography>
					<Typography sx={styles.data}>{address.name}</Typography>
				</Box>
				<Box sx={styles.infoWrapper}>
					<Typography sx={styles.title}>Address</Typography>
					<Typography sx={styles.data}>{address.address}</Typography>
				</Box>
				<Box sx={styles.infoWrapper}>
					<Typography sx={styles.title}>Phone</Typography>
					<Typography sx={styles.data}>{address.phone}</Typography>
				</Box>
			</CardContent>
			{btnAppear && (
				<Box>
					<CardActions sx={styles.actionsWrapper}>
						<IconButton
							onClick={() => setModelAppear(true)}
							sx={styles.editBtn}
						>
							<icons.Edit sx={styles.icon} />
						</IconButton>
						<IconButton
							onClick={() => onDelete(address.deliveryID)}
							sx={styles.deleteBtn}
						>
							<icons.Trashcan sx={styles.icon} />
						</IconButton>
					</CardActions>
					<Dialog
						open={modelAppear}
						onClose={() => setModelAppear(false)}
						sx={styles.dialog}
					>
						<DialogTitle sx={{textAlign: "center"}}>Edit Address</DialogTitle>
						<FormAddress
							address={address}
							formCommand="edit"
							formSubmit={onEdit}
							setAppear={setModelAppear}
						/>
					</Dialog>
				</Box>
			)}
		</Card>
	);
};
export default CardAddress;

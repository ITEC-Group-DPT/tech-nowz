import { React, useState } from 'react';
import {
	Card,
	CardContent,
	Typography,
	Button,
	Divider,
	CardActions,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FormAddress from '../FormAddress/FormAddress';

const CardAddress = ({ address, onDelete, onEdit }) => {
	const [formAppear, setFormAppear] = useState(false);
	return (
		<Card
			variant="outlined"
			sx={{ minWidth: 275, maxWidth: '80%', my: 2, mx: 'auto' }}
		>
			<CardContent>
				<Typography variant="p" sx={{ fontSize: 20 }} component="div">
					Name: {address.name} <br />
					Address: {address.address} <br />
					Phone: {address.phone}
				</Typography>
			</CardContent>

			<Divider sx={{ mx: 2 }}></Divider>

			<CardActions
				sx={{ justifyContent: 'flex-end', bgcolor: '#f5f5f5' }}
			>
				<Button
					disabled={formAppear}
					onClick={() => setFormAppear(true)}
					variant="outlined"
					size="small"
					color="success"
					startIcon={<DeleteIcon fontSize="small" />}
				>
					Edit
				</Button>
				<Button
					onClick={() => onDelete(address.deliveryID)}
					variant="outlined"
					size="small"
					color="error"
					startIcon={<DeleteIcon fontSize="small" />}
				>
					Delete
				</Button>
			</CardActions>
			{formAppear ? (
				<FormAddress
					address={address}
					formCommand="edit"
					formSubmit={onEdit}
					setAppear={setFormAppear}
				/>
			) : (
				<></>
			)}
		</Card>
	);
};
export default CardAddress;

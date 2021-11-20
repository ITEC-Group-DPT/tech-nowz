import { React, useReducer, useState } from 'react';
import {
	Typography,
	Box,
	Grid,
	TextField,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
} from '@mui/material';
import styles from './FeedbackForm.styles';

export function FeedbackForm(props) {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [formInput, setFormInput] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{
			name: '',
			phone: '',
			email: '',
			feedback: '',
		}
	);

	const handleInput = (event) => {
		const name = event.target.name;
		const newValue = event.target.value;
		setFormInput({ [name]: newValue });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setDialogOpen(true);
		Object.keys(formInput).forEach((inputKey) => {
			setFormInput({ [inputKey]: '' });
		});
		const delay = setTimeout(() => {
			window.location = props.websiteURL;
		}, 2000);
		return () => clearTimeout(delay);
	};

	return (
		<Box>
			<form onSubmit={handleSubmit}>
				<Box>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<Typography sx={styles.textContent}>
								<TextField
									label='Name'
									name='name'
									required={true}
									sx={styles.textField}
									fullWidth={true}
									value={formInput.name}
									onChange={handleInput}
								/>
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography sx={styles.textContent}>
								<TextField
									label='Phone'
									name='phone'
									required={true}
									sx={styles.textField}
									fullWidth={true}
									value={formInput.phone}
									onChange={handleInput}
								/>
							</Typography>
						</Grid>
					</Grid>
					<Typography sx={styles.textContent}>
						<TextField
							label='Email'
							name='email'
							required={true}
							sx={styles.textField}
							fullWidth={true}
							value={formInput.email}
							onChange={handleInput}
						/>
					</Typography>
					<Typography sx={styles.textContent}>
						<TextField
							label='Feedback'
							name='feedback'
							required={true}
							sx={styles.textField}
							fullWidth={true}
							multiline={true}
							minRows={7}
							maxRows={7}
							value={formInput.feedback}
							onChange={handleInput}
						/>
					</Typography>
					<Button
						type='submit'
						variant='outlined'
						size='large'
						sx={styles.sendButton}>
						Send
					</Button>
				</Box>
			</form>
			<Dialog open={dialogOpen}>
				<DialogActions sx={{ display: 'block' }}>
					<DialogContent sx={{ m: 0, p: 2 }}>
						<Typography gutterBottom>
							Your feedback has been sent
							<br />
							You will be redirect to homepage
						</Typography>
					</DialogContent>
				</DialogActions>
			</Dialog>
		</Box>
	);
}

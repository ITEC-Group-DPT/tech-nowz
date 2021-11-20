import { React } from 'react';
import {
	Typography,
	Box,
	Container,
	Grid,
	TextField,
	Link,
	Button,
} from '@mui/material';
import styles from './ContacUs.styles';

const mailURL = 'technowvn@gmail.com';
const websiteURL = 'www.technow.vn';

const ContactUs = () => {
	return (
		<Container sx={{ mt: '20px', mb: '20px' }}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={6} sx={styles.gridItem}>
					<Typography sx={styles.title}>Contact us</Typography>
					<Box>
						<hr />
						<Typography sx={styles.textContent}>
							Contact us if you have any problem while visiting
							our website
						</Typography>
						<Typography sx={styles.textContent}>
							(24/7 Support) Hotline: <b>0123-456-789</b>
						</Typography>
						<Grid container>
							<Grid item xs={12} md={6} sx={{ pr: '10px' }}>
								<Typography sx={styles.textContent}>
									<b>Name</b>
									<TextField
										placeholder='Name'
										sx={styles.textField}
										fullWidth={true}
										required={true}
									/>
								</Typography>
							</Grid>
							<Grid item xs={12} md={6}>
								<Typography sx={styles.textContent}>
									<b>Phone</b>
									<TextField
										placeholder='Phone number'
										sx={styles.textField}
										fullWidth={true}
										required={true}
									/>
								</Typography>
							</Grid>
						</Grid>
						<Typography sx={styles.textContent}>
							<b>Email</b>
							<TextField
								placeholder='Email'
								sx={styles.textField}
								fullWidth={true}
								required={true}
							/>
						</Typography>
						<Typography sx={styles.textContent}>
							<b>Feedback</b>
							<TextField
								placeholder='Leave a message here'
								sx={styles.textField}
								fullWidth={true}
								multiline={true}
								minRows={7}
								maxRows={7}
							/>
						</Typography>
						<Button
							variant='outlined'
							size='large'
							sx={styles.sendButton}>
							Send
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} sx={{ m: '20px 0' }}>
					<Box>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.630773293551!2d106.67998301480073!3d10.762912992330735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2sUniversity%20of%20Science%20-%20Ho%20Chi%20Minh%20City%20National%20University!5e0!3m2!1sen!2s!4v1637389600647!5m2!1sen!2s'
							width='600'
							height='288'
							style={{ border: '0', maxWidth: '100%' }}
							allowfullscreen=''
							loading='lazy'
						/>
						<Typography sx={styles.title}>Address</Typography>
						<hr />
						<Typography sx={styles.textContent}>
							Công ty TNHH Bốn Thành Viên Đồ Chơi Công Nghệ Việt
							Nam
							<br />
							227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ
							Chí Minh
						</Typography>
						<Box sx={{ display: 'flex' }}>
							<Typography sx={styles.textContent}>
								Email:
							</Typography>
							<Link
								sx={styles.textContent}
								onClick={(e) => {
									window.location = `mailto:${mailURL}}@gmail.com`;
									e.preventDefault();
								}}>
								{mailURL}
							</Link>
						</Box>
						<Box sx={{ display: 'flex' }}>
							<Typography sx={styles.textContent}>
								Website:
							</Typography>
							<Link
								sx={styles.textContent}
								onClick={(e) => {
									window.location = `http://${websiteURL}`;
									e.preventDefault();
								}}>
								{websiteURL}
							</Link>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ContactUs;

import React from 'react';
import styles from './Footer.style';
import { Container, Input, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { icons } from '../../constant';

const Footer = () => {
	return (
		<>
			<Box sx={styles.footer}>
				<Container maxWidth="xs">
					<Grid container spacing={1}>
						<Grid item xs={2} sx={styles.iconWrapper}>
							<icons.Facebook sx={styles.icon} />
						</Grid>
						<Grid item xs={2} sx={styles.iconWrapper}>
							<icons.Twitter sx={styles.icon} />
						</Grid>
						<Grid item xs={2} sx={styles.iconWrapper}>
							<icons.Google sx={styles.icon} />
						</Grid>
						<Grid item xs={2} sx={styles.iconWrapper}>
							<icons.Instagram sx={styles.icon} />
						</Grid>
						<Grid item xs={2} sx={styles.iconWrapper}>
							<icons.LinkedIn sx={styles.icon} />
						</Grid>
						<Grid item xs={2} sx={styles.iconWrapper}>
							<icons.GitHub sx={styles.icon} />
						</Grid>
					</Grid>
				</Container>
				<Container maxWidth="lg">
					<Grid
						container
						spacing={0}
						mt={1}
						sx={styles.newsletterWrapper}
					>
						<Grid item lg={3} xs={12}>
							<Typography sx={styles.signUp}>
								Sign up for our newsletter
							</Typography>
						</Grid>
						<Grid item lg={6} xs={12}>
							<Input
								placeholder="Email address"
								disableUnderline
								sx={styles.textField}
							/>
						</Grid>
						<Grid item lg={3} xs={12} sx={styles.btnWrapper}>
							<Button sx={styles.subscribeBtn} variant="outlined">
								Subscribe
							</Button>
						</Grid>
					</Grid>
				</Container>
				<Box sx={styles.addressWrapper}>
					<Box>
						<Typography sx={styles.address}>
							227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Việt Nam
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box sx={styles.bottomFooter}>
				<Box>
					<Typography sx={styles.copyright}>© 2021 Copyright: TechNow</Typography>
				</Box>
			</Box>
		</>
	);
};

export default Footer;

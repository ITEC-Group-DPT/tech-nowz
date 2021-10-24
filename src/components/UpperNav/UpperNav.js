import React from 'react';
import styles from './UpperNav.style';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Badge from '@mui/material/Badge';
import logo from '../../img/logo_sub.webp';
import { icons } from '../../constant';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const UpperNav = () => {
	const userInfo = useSelector((state) => state.Authentication.user);
	return (
		<Container maxWidth="xl" sx={styles.container}>
			<Grid container spacing={2}>
				<Grid item lg={3} xs={12} sx={styles.logoWrapper}>
					<Link to="/">
						<img style={styles.logo} src={logo} alt="" />
					</Link>
				</Grid>
				<Grid item lg={6} xs={12}>
					<TextField
						fullWidth
						size="small"
						label="Search"
						placeholder="Product names..."
						multiline
						id="fullWidth"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<icons.Search />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item lg={3} xs={12} sx={styles.menuContainer}>
					<Grid container spacing={1}>
						<Grid item xs={6}>
							<Link to="/checkout/cart" style={styles.menuItem}>
								<Badge badgeContent={1} color="error">
									<icons.Cart />
								</Badge>
								<Typography sx={styles.menuTitle}>
									Cart
								</Typography>
							</Link>
						</Grid>
						<Grid item xs={6}>
							{userInfo.isEmpty ? (
								<Link
									to="/authentication"
									style={styles.menuItem}
								>
									<icons.User />
									<Typography sx={styles.menuTitle}>
										Login
									</Typography>
								</Link>
							) : (
								<Link to="/" style={styles.menuItem}>
									<icons.User />
									<Typography sx={styles.menuTitle}>
										{userInfo.username}
									</Typography>
								</Link>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default UpperNav;

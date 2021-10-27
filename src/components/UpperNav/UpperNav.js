import { React, useState, useEffect } from 'react';
import styles from './UpperNav.style';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Badge from '@mui/material/Badge';
import logo from '../../img/logo_sub.webp';
import { icons } from '../../constant';
import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { searchProductsAPI } from '../../api/productApi';
import HorizontalProduct from '../HorizontalProduct/HorizontalProduct';

const UpperNav = () => {
	const userInfo = useSelector((state) => state.Authentication.user);
	const [searchValue, setSearchValue] = useState('');
	const handleChange = (event) => {
		setSearchValue(event.target.value);
	};

	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		if (searchValue !== '') {
			const delay = setTimeout(() => {
				searchProductsAPI(searchValue).then((response) => {
					if (response.data['success'] === true) {
						setSearchResult(response.data['data']);
						console.log(response.data.data);
					}
				});
			}, 500);
			return () => clearTimeout(delay);
		} else {
			setSearchResult([]);
		}
	}, [searchValue]);

	return (
		<Container maxWidth="xl" sx={styles.container}>
			<Grid container spacing={2}>
				<Grid item lg={3} xs={12} sx={styles.logoWrapper}>
					<Link to="/">
						<img style={styles.logo} src={logo} alt="" />
					</Link>
				</Grid>
				<Grid item lg={6} xs={12} sx={styles.searchComponent}>
					<TextField
						sx={styles.searchBar}
						size="small"
						label="Search"
						placeholder="Product names..."
						multiline
						value={searchValue}
						onChange={handleChange}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<icons.Search />
								</InputAdornment>
							),
						}}
					/>
					<Box sx={styles.searchResult}>
						{searchResult.map((product) => (
							<HorizontalProduct
								product={product}
								imageSize="10%"
								marginTop="0"
								width="100%"
								pricePadding="0"
							/>
						))}
					</Box>
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

import { React, useState, useEffect,useRef } from 'react';
import styles from './UpperNav.style';
import { Link } from 'react-router-dom';
import {
	Grid,
	Container,
	TextField,
	InputAdornment,
	Typography,
	Box,
	Badge,
	Card,
	CardContent,
	Button,
} from '@mui/material';
import logo from '../../img/logo_sub.webp';
import { icons } from '../../constant';
import { useSelector } from 'react-redux';
import { searchProductsAPI } from '../../api/productApi';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import HorizontalProduct from '../HorizontalProduct/HorizontalProduct';

import { cartSelector } from '../../store/selectors'
const UpperNav = () => {
	const userInfo = useSelector((state) => state.Authentication.user);
	const cart = useSelector(cartSelector);
	const anchorRef = useRef(null)
    const clickRef = useRef(null)

	const [searchValue, setSearchValue] = useState('');
	const handleChange = (event) => {
		setSearchValue(event.target.value);
	};

	const [searchResult, setSearchResult] = useState([]);
	const [searchStatus, setSearchStatus] = useState(0); // 0: no search input, 1: has data, 2: no data found
	useEffect(() => {
		if (searchValue !== '') {
			const delay = setTimeout(() => {
				searchProductsAPI(searchValue).then((response) => {
					if (response.data['success'] === true) {
						setSearchResult(response.data['data']);
						if (response.data['data'].length !== 0) {
							setSearchStatus(1);
						} else {
							setSearchStatus(2);
						}
					}
				});
			}, 500);
			return () => clearTimeout(delay);
		} else {
			setSearchResult([]);
			setSearchStatus(0);
		}
	}, [searchValue]);

	console.log(searchStatus);

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
							startAdornment: (
								<InputAdornment position="start">
									<icons.Search />
								</InputAdornment>
							),
						}}
					/>
					<Box sx={styles.searchResult}>
						{searchStatus !== 2 ? (
							searchResult.map((product) => {
								const productURL = `/product/${encodeURIComponent(
									product.name
								).replace(/%20/g, '-')}?i=${product.productID}`;
								return (
									<Link
										to={productURL}
										style={{ textDecoration: 'none' }}
									>
										<HorizontalProduct
											product={product}
											imageSize="10%"
											marginTop="0"
											width="100%"
											pricePadding="0"
										/>
									</Link>
								);
							})
						) : (
							<Card sx={styles.noProductCard}>
								<CardContent>
									<Typography>No product found</Typography>
								</CardContent>
							</Card>
							// when no product is found
						)}
					</Box>
				</Grid>
				<Grid item lg={3} xs={12} sx={styles.menuContainer}>
					<Grid container spacing={1}>
						<Grid item xs={6}>
							<Link to="/checkout/cart" style={styles.menuItem}>
								<Badge badgeContent={cart.totalQuantity || 0} color="error">
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
								<Box>
								<Button
									ref={anchorRef}
									id="composition-button"
									aria-controls={'composition-menu'}
									aria-expanded={'true'}
									aria-haspopup="true"
									onClick={() => clickRef.current()}
									sx={styles.btnNav}
								>
									<icons.User />
									<Typography sx={styles.menuTitle}>{userInfo.username}</Typography>
								</Button>
								<ProfileMenu anchorRef={anchorRef} clickRef={clickRef} />
							</Box>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default UpperNav;

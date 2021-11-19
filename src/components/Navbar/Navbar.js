import { React, useState, useEffect } from 'react';
import { AppBar, Toolbar, Grid, Container, IconButton, Box, Drawer, List, ListItem, Typography, Divider, useMediaQuery } from '@mui/material';
import NavItem from './NavItem/NavItem';
import NavItemUser from './NavItemUser/NavItemUser';
import { colors, icons } from '../../constant';
import { useStyles, style } from './Navbar.styles';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { logOut } from "../../store/actions/authAction";

const Navbar = () => {
	const styles = useStyles();
	const dispatch = useDispatch()
	const history = useHistory()
	const userInfo = useSelector((state) => state.Authentication.user);
	//console.log('userInfo: ', userInfo);

	// popUpNav
	const [isPopUp, setIsPopUp] = useState(true);
	let isHome = false;
	if (window.location.pathname === '/') isHome = true;

	useEffect(() => {
		const appBar = document.querySelector('.appBar');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsPopUp(!entry.isIntersecting);
				});
			},
			{ threshold: 1 }
		);
		observer.observe(appBar);
	}, []);

	// responsiveNav(drawer)
	const isMatch = useMediaQuery('(max-width: 950px)');
	const openSide = 'left'; // can be 'right', 'top' or 'bottom'
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{/* <ListItem button key="user" sx={{ padding: 0 }}>
					<NavItem
						href="/"
						title="Home"
						icon={<icons.Home />}
						isDrawer
					/>
				</ListItem> */}
				<ListItem button key="home" sx={{ padding: 0 }}>
					<NavItem
						href="/"
						title="Home"
						icon={<icons.Home />}
						isDrawer
					/>
				</ListItem>
				<ListItem button key="Hot Discount" sx={{ padding: 0 }}>
					<NavItem
						href="/"
						title="Hot Discount"
						icon={<icons.Offer />}
						isDrawer
					/>
				</ListItem>
				<ListItem button key="Shipping Policy" sx={{ padding: 0 }}>
					<NavItem
						href="/"
						title="Shipping Policy"
						icon={<icons.Truck />}
						isDrawer
					/>
				</ListItem>
				<ListItem button key="Contact Us" sx={{ padding: 0 }}>
					<NavItem
						href="/contactus"
						title="Contact Us"
						icon={<icons.Phone />}
						isDrawer
					/>
				</ListItem>
				<Divider sx={{ my: 2 }} />
				{userInfo.isEmpty ? (
					<ListItem button key="login" sx={{ padding: 0 }}>
						<Link to='/authentication' style={style.navLink}>
							<Box sx={style.authenWrapper}>
								<icons.User sx={style.icon} />
								<Typography sx={style.navTitle}>Login</Typography>
							</Box>
						</Link>
					</ListItem>
				) : (
					<ListItem button key="Contact Us" onClick={() => { dispatch(logOut(history)) }} sx={style.signOutListItem}>
						<Box sx={style.authenWrapper}>
							<icons.SignOut sx={style.icon} />
							<Typography sx={style.navTitle}>Sign out</Typography>
						</Box>
					</ListItem>
				)}
			</List>
		</Box>
	);
	// main
	return (
		<AppBar
			position="sticky"
			sx={{ backgroundColor: colors.primary, top: '-0.5px' }}
			className="appBar"
		>
			<Toolbar>
				<Container maxWidth="xl" sx={{ padding: 0 }}>
					<Grid container spacing={2}>
						{isMatch ? (
							<Grid item xs={3}>
								<IconButton
									aria-label="menu"
									size="medium"
									onClick={toggleDrawer(openSide, true)}
								>
									<icons.Menu style={{ color: 'white' }} />
								</IconButton>
								<Drawer
									classes={{ paper: styles.paper }}
									anchor={openSide}
									open={state[openSide]}
									onClose={toggleDrawer(openSide, false)}
								>
									{list(openSide)}
								</Drawer>
							</Grid>
						) : (
							<>
								<Grid item xs={2}>
									<NavItem
										href="/"
										title="Home"
										icon={<icons.Home />}
									/>
								</Grid>
								<Grid item xs={2}>
									<NavItem
										href="/"
										title="Hot Discount"
										icon={<icons.Offer />}
									/>
								</Grid>
								<Grid item xs={2}>
									<NavItem
										href="/"
										title="Shipping Policy"
										icon={<icons.Truck />}
									/>
								</Grid>
								<Grid item xs={2}>
									<NavItem
										href="/contactus"
										title="Contact Us"
										icon={<icons.Phone />}
									/>
								</Grid>
							</>
						)}
						<Grid item xs={9} md={4}>
							<NavItemUser
								userInfo={userInfo}
								isHome={isHome}
								isPopUp={isPopUp}
							/>
						</Grid>
					</Grid>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

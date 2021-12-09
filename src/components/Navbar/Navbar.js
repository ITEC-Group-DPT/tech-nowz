import { React, useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Grid, Container, IconButton, Box, Drawer, List, ListItem, Typography, Divider, useMediaQuery, Button } from '@mui/material';
import NavItem from './NavItem/NavItem';
import NavItemUser from './NavItemUser/NavItemUser';
import { colors, icons } from '../../constant';
import { useStyles, style } from './Navbar.styles';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { logOut } from "../../store/actions/authAction";
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu"

const Navbar = () => {
	const styles = useStyles();
	const dispatch = useDispatch()
	const history = useHistory()
	const userInfo = useSelector((state) => state.Authentication.user);
	const anchorRef = useRef(null)
	const clickRef = useRef(null)
	const anchorRefDrawer = useRef(null)
	const clickRefDrawer = useRef(null)
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
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem
					button
					key="Home"
					sx={{ padding: 0 }}
					onClick={toggleDrawer(anchor, false)}
				>
					<NavItem
						href="/"
						title="Home"
						icon={<icons.Home sx={style.iconNav} />}
						isDrawer
					/>
				</ListItem>
				<ListItem
					button
					key="Category"
					sx={{ padding: 0 }}
					ref={anchorRefDrawer}
					id="composition-button"
					aria-controls={'composition-menu'}
					aria-expanded={'true'}
					aria-haspopup="true"
					onClick={() => clickRefDrawer.current()}
				>
					<Box sx={style.authenWrapper}>
						<icons.Category sx={style.iconNav} />
						<Typography sx={style.titleNav}>Category</Typography>
					</Box>
					<CategoryMenu isDrawer anchorRef={anchorRefDrawer} clickRef={clickRefDrawer} onClick={toggleDrawer(anchor, false)} />
				</ListItem>
				<ListItem button key="Hot Discount" sx={{ padding: 0 }} onClick={toggleDrawer(anchor, false)}>
					<NavItem
						href="/"
						title="Hot Discount"
						icon={<icons.Offer sx={style.iconNav} />}
						isDrawer
					/>
				</ListItem>
				<ListItem button key="Shipping" sx={{ padding: 0 }} onClick={toggleDrawer(anchor, false)}>
					<NavItem
						href="/"
						title="Shipping"
						icon={<icons.Truck sx={style.iconNav} />}
						isDrawer
					/>
				</ListItem>
				<ListItem button key="Contact Us" sx={{ padding: 0 }} onClick={toggleDrawer(anchor, false)}>
					<NavItem
						href="/contactus"
						title="Contact Us"
						icon={<icons.Phone sx={style.iconNav} />}
						isDrawer
					/>
				</ListItem>

				{userInfo.isEmpty ? (
					""
				) : (
					<>
						<Divider sx={{ my: 2 }} />
						<ListItem button key="Cart" sx={{ padding: 0 }} onClick={toggleDrawer(anchor, false)}>
							<NavItem
								href="/checkout/cart"
								title="Cart"
								icon={<icons.Cart sx={style.iconNav} />}
								isDrawer
							/>
						</ListItem>
						<ListItem button key="Order History" sx={{ padding: 0 }} onClick={toggleDrawer(anchor, false)}>
							<NavItem
								href="/profile/orderhistory"
								title="Order"
								icon={<icons.Order sx={style.iconNav} />}
								isDrawer
							/>
						</ListItem>
						<ListItem button key="Favorite" sx={{ padding: 0 }} onClick={toggleDrawer(anchor, false)}>
							<NavItem
								href="/profile/favorite"
								title="Favorite"
								icon={<icons.NotFavorite sx={style.iconNav} />}
								isDrawer
							/>
						</ListItem>
						<ListItem button key="Address Book" sx={{ padding: 0 }} onClick={toggleDrawer(anchor, false)}>
							<NavItem
								href="/profile/addressbook"
								title="Address"
								icon={<icons.Address sx={style.iconNav} />}
								isDrawer
							/>
						</ListItem>
					</>
				)}
				<Divider sx={{ my: 2 }} />
				{userInfo.isEmpty ? (
					<ListItem button key="login" sx={{ padding: 0 }} onClick={toggleDrawer(anchor, false)}>
						<Link to='/authentication' style={style.navLink}>
							<Box sx={style.authenWrapper}>
								<icons.User sx={style.icon} />
								<Typography sx={style.navTitle}>Login</Typography>
							</Box>
						</Link>
					</ListItem>
				) : (
					<ListItem button key="log out" onClick={() => { dispatch(logOut(history)) }} sx={style.signOutListItem}>
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
								<Grid item xs={1.5} sx={style.gridWrapper}>
									<NavItem
										href="/"
										title="Home"
										icon={<icons.Home sx={style.iconNav} />}
									/>
								</Grid>
								<Grid item xs={1.5} sx={style.gridWrapper}>
									<Button
										ref={anchorRef}
										id="composition-button"
										aria-controls={'composition-menu'}
										aria-expanded={'true'}
										aria-haspopup="true"
										onClick={() => clickRef.current()}
										sx={style.btnWrapper}
									>
										<icons.Category sx={style.iconNav} />
										<Typography sx={style.titleNav}>Category</Typography>
									</Button>

								</Grid>
								<Grid item xs={1.5} sx={style.gridWrapper}>
									<NavItem
										href="/"
										title="Discount"
										icon={<icons.Offer sx={style.iconNav} />}
									/>
								</Grid>
								<Grid item xs={1.5} sx={style.gridWrapper}>
									<NavItem
										href="/"
										title="Shipping"
										icon={<icons.Truck sx={style.iconNav} />}
									/>
								</Grid>
								<Grid item xs={1.5} sx={style.gridWrapper}>
									<NavItem
										href="/contactus"
										title="Contact Us"
										icon={<icons.Phone sx={style.iconNav} />}
									/>
								</Grid>
							</>
						)}
						<Grid item xs={9} md={4.5}>
							<NavItemUser
								userInfo={userInfo}
								isHome={isHome}
								isPopUp={isPopUp}
							/>
						</Grid>
					</Grid>
					<CategoryMenu anchorRef={anchorRef} clickRef={clickRef} />
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

import React from 'react';
import styles from './NavItem.style';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const NavItem = ({ href, title, icon, isDrawer }) => {
	return (
		<Link to={href} style={styles.navLink}>
			<Box sx={isDrawer ? styles.navItemDrawer : styles.navItem}>
				{icon}
				<Typography sx={styles.navTitle}>{title}</Typography>
			</Box>
		</Link>
	);
};

export default NavItem;

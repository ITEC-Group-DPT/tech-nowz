import React from 'react';
import styles from './NotFound.styles';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import notFound from "../../img/not-found.png"
import EmptyList from '../EmptyList/EmptyList';

const NotFound = () => {
	return (
		<Box sx={styles.wrapper}>
			<EmptyList img={notFound} title={"Page not found"} imgHeight={'50vh'} btnMarginTop={"5vh"} />
		</Box>
	);
};

export default NotFound;

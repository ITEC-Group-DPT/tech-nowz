import React from 'react';
import styles from './Sponsors.style';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container, Grid, CardActionArea, Typography } from '@mui/material';
import sponsor1 from '../../img/sponsor-1.png';
import sponsor2 from '../../img/sponsor-2.jpeg';
import sponsor3 from '../../img/sponsor-3.jpeg';
import sponsor4 from '../../img/sponsor-4.jpg';
import sponsor5 from '../../img/sponsor-5.png';
import sponsor6 from '../../img/sponsor-6.jpg';

const Sponsors = () => {
	return (
		<Container maxWidth="xl" sx={styles.container}>
			<Typography
				gutterBottom
				variant="h5"
				component="div"
				sx={styles.sponsorTitle}
			>
				Our Sponsors
			</Typography>
			<Grid container spacing={{ xs: 3, md: 5 }}>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={styles.card}>
						<CardActionArea sx={styles.cardActionArea}>
							<CardMedia
								component="img"
								image={sponsor1}
								alt="sponsor"
								sx={styles.sponsor}
							/>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={styles.card}>
						<CardActionArea sx={styles.cardActionArea}>
							<CardMedia
								component="img"
								image={sponsor4}
								alt="sponsor"
								sx={styles.sponsor}
							/>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={styles.card}>
						<CardActionArea sx={styles.cardActionArea}>
							<CardMedia
								component="img"
								image={sponsor3}
								alt="sponsor"
								sx={styles.sponsor}
							/>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={styles.card}>
						<CardActionArea sx={styles.cardActionArea}>
							<CardMedia
								component="img"
								image={sponsor2}
								alt="sponsor"
								sx={styles.sponsor}
							/>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={styles.card}>
						<CardActionArea sx={styles.cardActionArea}>
							<CardMedia
								component="img"
								image={sponsor5}
								alt="sponsor"
								sx={styles.sponsor}
							/>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Card sx={styles.card}>
						<CardActionArea sx={styles.cardActionArea}>
							<CardMedia
								component="img"
								image={sponsor6}
								alt="sponsor"
								sx={styles.sponsor}
							/>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Sponsors;

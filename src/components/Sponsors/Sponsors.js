import React from 'react'
import styles from './Sponsors.style'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import sponsor1 from '../../img/sponsor-1.png';
import sponsor2 from '../../img/sponsor-2.jpeg';
import sponsor3 from '../../img/sponsor-3.jpeg';
import sponsor4 from '../../img/sponsor-4.jpg';
import sponsor5 from '../../img/sponsor-5.png';
import sponsor6 from '../../img/sponsor-6.jpg';


const Sponsors = () => {
    return (
        <div>
            <Typography gutterBottom variant="h5" component="div" sx={styles.sponsorTitle}>Our Sponsors</Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={4}>
                    <Card sx={styles.card}>
                        <CardActionArea sx={styles.cardActionArea}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={sponsor1}
                                alt="product image"
                                sx={styles.sponsor}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Card sx={styles.card}>
                        <CardActionArea sx={styles.cardActionArea}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={sponsor4}
                                alt="product image"
                                sx={styles.sponsor}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Card sx={styles.card}>
                        <CardActionArea sx={styles.cardActionArea}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={sponsor3}
                                alt="product image"
                                sx={styles.sponsor}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Card sx={styles.card}>
                        <CardActionArea sx={styles.cardActionArea}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={sponsor2}
                                alt="product image"
                                sx={styles.sponsor}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Card sx={styles.card}>
                        <CardActionArea sx={styles.cardActionArea}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={sponsor5}
                                alt="product image"
                                sx={styles.sponsor}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <Card sx={styles.card}>
                        <CardActionArea sx={styles.cardActionArea}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={sponsor6}
                                alt="product image"
                                sx={styles.sponsor}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Sponsors

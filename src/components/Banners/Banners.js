import React from 'react'
import styles from './Banners.style';
import Slider from "react-slick";
import IconButton from '@mui/material/IconButton';
import slideShow1 from '../../img/slideshow_1.jpeg';
import slideShow2 from '../../img/slideshow_2.jpeg';
import slideShow3 from '../../img/slideshow_3.jpeg';
import leftBanner from '../../img/left-banner.png';
import smallBanner1 from '../../img/sm-banner2.webp';
import smallBanner2 from '../../img/sm-banner3.webp';
import { icons } from '../../constant';
import { Grid } from '@mui/material';

const CustomNextArrow = ({ onClick }) => (
    <IconButton aria-label="next" component="span" size="large" onClick={onClick} style={{
        position: "absolute",
        padding: 0,
        right: "30px",
        zIndex: "1000",
        top: "50%",
    }}>
        <icons.Next fontSize="inherit" style={{ color: 'white' }} />
    </IconButton>
)

const CustomPrevArrow = ({ onClick }) => (
    <IconButton aria-label="prev" component="span" size="large" onClick={onClick} style={{
        position: "absolute",
        padding: 0,
        left: "30px",
        zIndex: "1000",
        top: "50%",
    }}>
        <icons.Prev fontSize="inherit" style={{ color: 'white' }} />
    </IconButton>
)

const settings = {
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
}

const Banners = () => {
    return (

        <Grid container spacing={2}>
            <Grid item xs={12} lg={3} sx={styles.leftBannerWrapper}>
                <img src={leftBanner} alt="left-banner" style={styles.leftBanner} />
            </Grid>
            <Grid item xs={12} lg={6}>
                <Slider {...settings}>
                    <div>
                        <div style={styles.slideShowWrapper}>
                            <img style={styles.slideShow} src={slideShow1} alt="slide1" />
                        </div>
                    </div>
                    <div>
                        <div style={styles.slideShowWrapper}>
                            <img style={styles.slideShow} src={slideShow2} alt="slide2" />
                        </div>
                    </div>
                    <div>
                        <div style={styles.slideShowWrapper}>
                            <img style={styles.slideShow} src={slideShow3} alt="slide3" />
                        </div>
                    </div>

                </Slider>
            </Grid>
            <Grid item xs={12} lg={3} sx={styles.rightBannerWrapper}>
                <img src={smallBanner1} alt="sm-banner1" style={styles.rightBanner} />
                <img src={smallBanner2} alt="sm-banner2" style={styles.rightBanner} />
            </Grid>
        </Grid>
    )
}

export default Banners

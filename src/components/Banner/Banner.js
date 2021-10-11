import React from 'react'
import styles from './Banner.style';
import Slider from "react-slick";
import { Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import slideShow1 from '../../img/slide-show1.jpg';
import slideShow2 from '../../img/slide-show2.jpg';
import slideShow3 from '../../img/slide-show3.jpg';
import { icons } from '../../constant';

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
    autoplaySpeed: 6000,
    pauseOnHover: true,
    swipeToSlide: true,

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
}

const Banners = () => {
    return (
        <Container maxWidth='xxl' style={styles.container}>
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
        </Container>
    )
}

export default Banners

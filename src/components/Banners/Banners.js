import React from 'react'
import Slider from "react-slick";
import IconButton from '@mui/material/IconButton';
import { icons } from '../../constant';

const CustomNextArrow = ({ onClick }) => (
    <IconButton aria-label="next" component="span" size="large" onClick={onClick} style={{
        position: "absolute",
        padding: 0,
        right: "30px",
        zIndex: "1000",
        top: "50%",
        backgroundColor: "white",
    }}>
        <icons.Next fontSize="inherit" />
    </IconButton>
)

const CustomPrevArrow = ({ onClick }) => (
    <IconButton aria-label="prev" component="span" size="large" onClick={onClick} style={{
        position: "absolute",
        padding: 0,
        left: "30px",
        zIndex: "1000",
        top: "50%",
        backgroundColor: "white",
    }}>
        <icons.Prev fontSize="inherit" />
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

        <Slider {...settings}>
            <div>
                <h3 style={{ backgroundColor: "blue", height: "700px" }}></h3>
            </div>
            <div>
                <h3 style={{ backgroundColor: "red", height: "700px" }}></h3>
            </div>
            <div>
                <h3 style={{ backgroundColor: "yellow", height: "700px" }}></h3>
            </div>
            <div>
                <h3 style={{ backgroundColor: "green", height: "700px" }}></h3>
            </div>
            <div>
                <h3 style={{ backgroundColor: "black", height: "700px" }}></h3>
            </div>
        </Slider>

    )
}

export default Banners

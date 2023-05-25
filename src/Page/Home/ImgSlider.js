import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Container = styled.div`
    overflow: hidden;
    text-align: center;
    width: 70em;
    height: 60vh;
    background-color: rgba(255,255,255,0.25);
`;
const StyledSlider = styled(Slider)`
    .slick-slide div {
        outline: none;
        align-items: center;
        border: 1px white ;
    }
`;


function ImgSlider(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3500,

    }
    return (
        <Container>
            <StyledSlider { ...settings }>
                <div>
                    Slider1
                </div>
                <div>
                    Slide2
                </div>
                <div>
                    Slide3
                </div>
            </StyledSlider>
        </Container>
    );
}

export default ImgSlider;
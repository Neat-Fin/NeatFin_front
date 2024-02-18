import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import "../Styles/Slidestyle.css";
const Slide = styled.div`
  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: wihte;
`;

export default function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  return (
    <Slider {...settings}>
      <Slide >
        <img className="slick-slide"src="./neatimg1.png" alt="1" />
      </Slide>
      <Slide>
        <img className="slick-slide"src="./neatimg2.png" alt="2" />
      </Slide>
      <Slide>
        <img className="slick-slide"src="./neatimg3.png" alt="3" />
      </Slide>
      
    </Slider>
  );
}

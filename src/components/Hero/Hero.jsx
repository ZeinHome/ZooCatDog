import hero from '../../images/hero/hero.jpg';
import hero1 from '../../images/hero/hero1.jpg';
import hero2 from '../../images/hero/hero2.jpg';
import hero3 from '../../images/hero/hero3.png';

import bulk from '../../images/hero/bulk_food_ukr.jpg';
import live from '../../images/hero/live_shop_ukr.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  HeroSection,
  HeroContainer,
  ArrowLeft,
  ArrowRight,
  HeroContainerImages,
  SliderImages,
  Aside,
} from './Hero.styled';

const SampleNextArrow = props => {
  const { onClick } = props;
  return <ArrowRight onClick={onClick} />;
};

const SamplePrevArrow = props => {
  const { onClick } = props;
  return <ArrowLeft onClick={onClick} />;
};

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <HeroSection>
      <HeroContainer>
        <SliderImages {...settings}>
          <div>
            <HeroContainerImages src={hero} alt="Hero images" />
          </div>
          <div>
            <HeroContainerImages src={hero1} alt="Hero images" />
          </div>
          <div>
            <HeroContainerImages src={hero2} alt="Hero images" />
          </div>
          <div>
            <HeroContainerImages src={hero3} alt="Hero images" />
          </div>
        </SliderImages>
        <Aside>
          <img src={bulk} alt="Hero images" />
          <img src={live} alt="Hero images" />
        </Aside>
      </HeroContainer>
    </HeroSection>
  );
}

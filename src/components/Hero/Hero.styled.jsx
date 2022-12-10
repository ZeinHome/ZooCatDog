import styled from 'styled-components';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import Slider from 'react-slick';

export const HeroSection = styled.section`
  padding: 30px 0px;
`;

export const HeroContainer = styled.div`
  display: flex;
  max-width: 1420px;
  margin: 0px auto;
  padding: 0px 15px;
  :hover svg {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ArrowLeft = styled(GoChevronLeft)`
  position: absolute;
  top: 50%;
  left: 15px;
  border: 2px solid ${p => p.theme.colors.white};
  border-radius: 50%;
  opacity: 0;
  z-index: 2;
  transition: all 1.5s ease;
  @media screen and (min-width: 768px) and (max-width: 1700px) {
    font-size: 50px;
  }
  @media screen and (min-width: 1710px) {
    font-size: 70px;
    left: 0px;
    border: 3px solid ${p => p.theme.colors.black};
  }
  :hover {
    background-color: ${p => p.theme.colors.white};
  }
`;

export const ArrowRight = styled(GoChevronRight)`
  position: absolute;
  top: 50%;
  right: 15px;
  border: 2px solid ${p => p.theme.colors.white};
  border-radius: 50%;
  opacity: 0;
  transition: all 1.5s ease;
  @media screen and (min-width: 768px) and (max-width: 1700px) {
    font-size: 50px;
  }
  @media screen and (min-width: 1710px) {
    font-size: 70px;
    right: 0px;
    border: 3px solid ${p => p.theme.colors.black};
  }
  :hover {
    background-color: ${p => p.theme.colors.white};
  }
`;

export const SliderImages = styled(Slider)`
  position: relative;
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroContainerImages = styled.img`
  width: 100%;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 40px;
  img {
    :first-child {
      margin-bottom: 20px;
    }
  }
`;

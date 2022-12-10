import styled from 'styled-components';

import { GoChevronRight } from 'react-icons/go';

export const ProductList = styled.ul`
  @media screen and (min-width: 1200px) {
    display: flex;
    position: relative;
  }
`;

export const ListProductItem = styled.li`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 250px;
  padding: 10px 30px;
  border-bottom: 1px solid ${p => p.theme.colors.underLineListProduct};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 1200px) {
    width: 100vw;
    background-color: ${p => p.theme.colors.primary};
    border: none;
    :not(:last-child) {
      margin-right: 3px;
    }
    :hover {
      background-color: ${p => p.theme.colors.hoverPrimary};
      & > ul {
        display: block;
      }
    }
  }
`;

export const ListProductImages = styled.img`
  width: 2em;
  margin-right: 10px;
  @media screen and (min-width: 1200px) {
    margin-right: 20px;
  }
`;

export const ListProductText = styled.p`
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;
`;

export const ArrowRight = styled(GoChevronRight)`
  position: absolute;
  top: 14px;
  right: 5px;
  font-size: 25px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const AdditionallyList = styled.ul`
  position: absolute;
  perspective: 1000px;
  display: none;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 5;
  font-weight: 600;
  border: 1px solid orange;
  padding: 5px;

  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text};

  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

export const AdditionallyItems = styled.li`
  width: 400px;
  position: relative;
  padding: 10px 15px;

  :not(:last-child) {
    margin-bottom: 15px;
  }
  :hover {
    background-color: ${p => p.theme.colors.hoverPrimary};
    ul {
      display: block;
    }
  }
`;

export const ArrowRightAdditionally = styled(GoChevronRight)`
  position: absolute;
  top: 12px;
  right: 0;
  font-size: 20px;
`;

export const AdditionallyListTwo = styled.ul`
  position: absolute;
  display: none;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 5;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid orange;
  padding: 10px;

  animation: growDown 200ms ease-in-out forwards;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

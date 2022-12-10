import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const BasketListProductsItem = styled.li`
  display: grid;
  grid-template-columns: 2fr repeat(3, 3fr) 1fr;
  padding: 20px 0px;
  background: ${p => p.theme.colors.white};
  border: 1px solid rgba(126, 155, 189, 0.3);
  * {
    align-self: center;
  }
  @media screen and (max-width: 599px) {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(60px, auto);
    padding: 15px 0px;
  }
`;

export const ButtonRemove = styled(AiOutlineClose)`
  border: 1px solid black;
  border-radius: 50%;
  font-size: ${p => p.theme.fontSizes.xl};
  padding: 5px;
  opacity: 0.5;
  transition: opacity 0.25s ease-in-out;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const CartImage = styled.img`
  justify-self: center;
  @media screen and (max-width: 599px) {
    grid-column: 1/3;
  }
`;

export const CartTitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.2;
  @media screen and (max-width: 599px) {
    padding: 0 10px;
    grid-column: 3/-1;
  }
`;

export const CartPrice = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: 1.3;
  color: ${p => p.theme.colors.black};
  @media screen and (max-width: 599px) {
    grid-column: 3/6;
  }
`;

export const CartAmount = styled.div`
  display: flex;
  @media screen and (max-width: 599px) {
    grid-column: 1/3;
    justify-self: center;
  }
`;
export const Control = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  @media screen and (max-width: 599px) {
    margin-left: 5px;
  }
`;

export const ButtonCounter = styled.button`
  font-size: ${p => p.theme.fontSizes.l};
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  @media screen and (max-width: 599px) {
    font-size: ${p => p.theme.fontSizes.ml};
  }
`;

export const CartInput = styled.input`
  width: 40px;
  height: 30px;
  text-align: center;
  background: ${p => p.theme.colors.cartBgMain};
  border-radius: 3px;
  border: ${p => p.theme.borders.none};
  outline: none;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
  }
`;

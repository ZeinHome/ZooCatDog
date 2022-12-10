import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsBasket2 } from 'react-icons/bs';

export const HeaderUnderLine = styled.header`
  padding: 15px 0;
  border-bottom: 1px solid ${p => p.theme.colors.underLineHeader};
  background-color: ${p => p.theme.colors.white};
`;

export const Computer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const Burger = styled.button`
  border: ${p => p.theme.borders.none};
  outline: 0;
  background-color: ${p => p.theme.colors.white};
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const HeaderLogo = styled(NavLink)`
  width: 65%;
  @media screen and (min-width: 1200px) {
    width: 200px;
  }
`;

export const Phones = styled.div`
  text-align: center;
  margin-top: 10px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const PhonesComputer = styled.div`
  margin-left: 20px;
`;

export const PhonesText = styled.p`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const PhonesList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const PhonesNumber = styled.li`
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-right: 15px;
  }

  a {
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.ml};
    color: ${p => p.theme.colors.black};
    :hover,
    :focus {
      color: ${p => p.theme.colors.hoverPrimary};
    }
  }
  svg {
    margin-left: 10px;
  }
`;

export const SearchFormContainer = styled.div`
  margin-top: 25px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  @media screen and (min-width: 1200px) {
    margin-top: 0px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 3px;
  overflow: hidden;
  @media screen and (min-width: 1200px) {
    min-width: 450px;
  }
  @media screen and (min-width: 1400px) {
    min-width: 680px;
  }
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: ${p => p.theme.borders.none};
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover,
  :focus {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.l};
  border: ${p => p.theme.borders.none};
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
export const BsBasket = styled(BsBasket2)`
  width: 45px;
  height: 45px;
  color: ${p => p.theme.colors.primary};
  transition: color 0.25s ease-in-out;
  :hover,
  :focus {
    color: ${p => p.theme.colors.hoverPrimary};
  }
`;

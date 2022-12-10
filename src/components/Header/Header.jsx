import logo from '../../images/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FaViber } from 'react-icons/fa';
import { useState } from 'react';

import Drawer from '../Drawer';
import Basket from '../Basket';
import { Container } from '../Container/Container.styled';
import {
  HeaderUnderLine,
  Computer,
  HeaderContainer,
  Burger,
  HeaderLogo,
  Phones,
  PhonesComputer,
  PhonesText,
  PhonesList,
  PhonesNumber,
  SearchFormContainer,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  BsBasket,
} from './Header.styled';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  const OpenedDrawer = () => {
    setDrawerOpen(true);
  };

  const OpenedBasket = () => {
    setBasketOpen(true);
  };

  return (
    <HeaderUnderLine>
      <Drawer setDrawerOpen={setDrawerOpen} isOpened={drawerOpen} />
      <Basket setBasketOpen={setBasketOpen} isOpened={basketOpen} />

      <Container>
        <Computer>
          <Burger onClick={OpenedDrawer}>
            <AiOutlineMenu size={35} color="black" />
          </Burger>

          <HeaderLogo to="/">
            <img src={logo} alt="Logo" />{' '}
          </HeaderLogo>

          <HeaderContainer>
            <SearchFormContainer>
              <SearchForm>
                <SearchFormBtn>
                  <BsSearch size={20} />
                </SearchFormBtn>
                <SearchFormInput
                  type="text"
                  autocomplete="off"
                  placeholder="Поиск товаров..."
                />
              </SearchForm>
            </SearchFormContainer>

            <PhonesComputer>
              <PhonesText>
                Минимальный заказ 400 грн, режим работы с 9 до 19:00
              </PhonesText>
              <PhonesList>
                <PhonesNumber>
                  <a href="tel:++380662274925">(066) 227-49-25</a>
                </PhonesNumber>
                <PhonesNumber>
                  <a href="tel:++380985632615">(098) 563-26-15</a>
                  <FaViber size={22} color="#aa17cf" />
                </PhonesNumber>
              </PhonesList>
            </PhonesComputer>
          </HeaderContainer>

          <BsBasket onClick={OpenedBasket} />
        </Computer>

        <Phones>
          <PhonesText>
            Минимальный заказ 400 грн, режим работы
            <br />с 9 до 19:00
          </PhonesText>
          <PhonesList>
            <PhonesNumber>
              <a href="tel:++380662274925">(066) 227-49-25</a>
            </PhonesNumber>
            <PhonesNumber>
              <a href="tel:++380985632615">(098) 563-26-15</a>
              <FaViber size={22} color="#aa17cf" />
            </PhonesNumber>
          </PhonesList>

          <SearchFormContainer>
            <SearchForm>
              <SearchFormBtn>
                <BsSearch size={20} />
              </SearchFormBtn>
              <SearchFormInput
                type="text"
                autocomplete="off"
                placeholder="Поиск товаров..."
              />
            </SearchForm>
          </SearchFormContainer>
        </Phones>
      </Container>
    </HeaderUnderLine>
  );
}

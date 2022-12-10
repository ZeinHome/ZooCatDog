import { useEffect } from 'react';
import ListProduct from '../ListProduct';
import { listProduct } from '../../js/FakeAPI/listProduct';

import {
  Overlay,
  DrawerContainer,
  DrawerTitle,
  ListProductItem,
  AuthorizationText,
} from './Drawer.styled';

const authorization = [
  { id: 1, text: 'Авторизация' },
  { id: 2, text: 'Регистрация' },
];

export default function Drawer({ setDrawerOpen, isOpened }) {
  useEffect(() => {
    if (isOpened === true) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpened]);

  return (
    <Overlay onClick={() => setDrawerOpen(false)} opened={isOpened}>
      <DrawerContainer onClick={e => e.stopPropagation()} opened={isOpened}>
        <DrawerTitle>Информация</DrawerTitle>

        <ListProduct item={listProduct} />

        <DrawerTitle>Личный кабинет</DrawerTitle>
        {authorization.map(({ id, text }) => (
          <ListProductItem key={id}>
            <AuthorizationText>{text}</AuthorizationText>
          </ListProductItem>
        ))}
      </DrawerContainer>
    </Overlay>
  );
}

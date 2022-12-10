import { AiOutlineArrowRight } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

import { useState, useEffect } from 'react';
import { useMedia } from 'react-use';
import BasketItems from '../BasketItems';

import corm from '../../images/poducts/Сухой-корм-гипоаллергенный-для-взрослых-собак-всех-пород-Клуб-4-четыре-лапы-Актив-CLUB-4-PAWS-PREMIUM-ягненок-и-рис-400x400.jpg';
import {
  Overlay,
  DrawerContainer,
  DrawerTitle,
  Box,
  BasketListProducts,
  BoxOrder,
  Order,
  OrderItem,
  OrderTitle,
  ButtonOrder,
  ButtonOrderText,
  CartHeader,
  CartHeaderTitle,
  CartFooter,
  CartFooterCount,
} from './Basket.styled';

const obj = [
  {
    id: 1,
    image: corm,
    count: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 300,
    priceDiscount: 500,
    weight: 20,
  },
  {
    id: 2,
    image: corm,
    count: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 500,
    priceDiscount: 700,
    weight: 50,
  },
  {
    id: 3,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 700,
    count: 1,
    priceDiscount: 800,
    weight: 50,
  },
  {
    id: 4,
    image: corm,
    count: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 1200,
    priceDiscount: 500,
    weight: 20,
  },
];

export default function Basket({ setBasketOpen, isOpened }) {
  const [cart, setCart] = useState(obj);
  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => prev + curr.price, 0),
    count: cart.reduce((prev, curr) => prev + curr.count, 0),
  });

  const isWide = useMedia('(min-width: 600px)');
  const priceFormatter = new Intl.NumberFormat();

  useEffect(() => {
    if (isOpened === true) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpened]);

  useEffect(() => {
    const countLength = cart.every(item => item.count !== 0);
    // const test = cart.map(item => (item.count !== 0 ? null : item.id));

    if (countLength) {
      setTotal({
        price: cart.reduce((prev, curr) => prev + curr.price * curr.count, 0),
        count: cart.reduce((prev, curr) => prev + curr.count, 0),
      });
    } else {
      cart.map(item => (item.count === 0 ? 1 : item.count));
    }
  }, [cart]);

  const productDelete = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const onChangeInput = (id, value) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id === id) {
          return { ...item, count: value };
        }
        return item;
      })
    );
  };

  const onIncrementValueEvent = id => {
    setCart(prev =>
      prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      })
    );
  };

  const onDecrementValueEvent = id => {
    setCart(prev =>
      prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count > 1 ? item.count - 1 : 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <Overlay onClick={() => setBasketOpen(false)} opened={isOpened}>
      <DrawerContainer onClick={e => e.stopPropagation()} opened={isOpened}>
        <DrawerTitle>
          Корзина товара{' '}
          <GrClose onClick={() => setBasketOpen(false)} size={24} />
        </DrawerTitle>

        <Box>
          {isWide ? (
            <CartHeader>
              <CartHeaderTitle>наименование</CartHeaderTitle>
              <div>количество</div>
              <div>стоимость</div>
            </CartHeader>
          ) : null}

          <BasketListProducts>
            <BasketItems
              items={cart}
              productDelete={productDelete}
              onIncrementValueEvent={onIncrementValueEvent}
              onDecrementValueEvent={onDecrementValueEvent}
              onChangeInput={onChangeInput}
              priceFormatter={priceFormatter}
            />
          </BasketListProducts>

          {cart.length !== 0 ? (
            <>
              <CartFooter>
                <CartFooterCount>{total.count} единицы</CartFooterCount>
                <div>{priceFormatter.format(total.price)} грн.</div>
              </CartFooter>

              <BoxOrder>
                <Order>
                  <OrderItem>
                    <OrderTitle>Скидка 5%:</OrderTitle>
                    <span>
                      {priceFormatter.format(total.price - total.price * 0.05)}{' '}
                      грн
                    </span>
                  </OrderItem>
                </Order>
                <ButtonOrder>
                  <ButtonOrderText> Оформить заказ</ButtonOrderText>
                  <AiOutlineArrowRight size={20} />
                </ButtonOrder>
              </BoxOrder>
            </>
          ) : null}
        </Box>
      </DrawerContainer>
    </Overlay>
  );
}

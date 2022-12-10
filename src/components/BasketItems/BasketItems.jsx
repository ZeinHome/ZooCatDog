import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import {
  BasketListProductsItem,
  ButtonRemove,
  CartImage,
  CartTitle,
  CartPrice,
  CartAmount,
  Control,
  ButtonCounter,
  CartInput,
} from './BasketItems.styled';

export default function BasketItems({
  items,
  productDelete,
  onIncrementValueEvent,
  onDecrementValueEvent,
  onChangeInput,
  priceFormatter,
}) {
  return (
    <>
      {items.map(({ id, text, price, image, count }) => (
        <BasketListProductsItem key={id}>
          <CartImage src={image} alt="product" />

          <CartTitle>{text}</CartTitle>

          <CartAmount>
            <CartInput
              type="number"
              min="1"
              max="10"
              value={count < 1 ? 1 : count}
              onChange={e => onChangeInput(id, +e.target.value)}
            />

            <Control>
              <ButtonCounter
                type="button"
                onClick={() => onIncrementValueEvent(id)}
              >
                <MdKeyboardArrowUp />
              </ButtonCounter>
              <ButtonCounter
                type="button"
                onClick={() => onDecrementValueEvent(id)}
              >
                <MdKeyboardArrowDown />
              </ButtonCounter>
            </Control>
          </CartAmount>

          <CartPrice>
            цена: {priceFormatter.format(count === 0 ? price : price * count)}
            грн
          </CartPrice>

          <ButtonRemove type="button" onClick={() => productDelete(id)} />
        </BasketListProductsItem>
      ))}
    </>
  );
}

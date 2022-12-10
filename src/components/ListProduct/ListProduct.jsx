import {
  ProductList,
  ListProductItem,
  ListProductImages,
  ListProductText,
  ArrowRight,
  AdditionallyList,
  AdditionallyItems,
  ArrowRightAdditionally,
  AdditionallyListTwo,
} from './ListProduct.styled';

export default function ListProduct({ item }) {
  return (
    <ProductList>
      {item.map(({ id, image, text, additionally = [] }) => (
        <ListProductItem key={id}>
          <ListProductImages src={image} alt={text} />
          <ListProductText>{text}</ListProductText>
          <ArrowRight />

          {additionally.length === 0 ? null : (
            <AdditionallyList left="0%" top="100%">
              {additionally.map(({ idA, name, additionallyTwo = [] }) => (
                <AdditionallyItems key={idA}>
                  {name}
                  {additionallyTwo.length === 0 ? null : (
                    <ArrowRightAdditionally />
                  )}
                  {additionallyTwo.length === 0 ? null : (
                    <AdditionallyListTwo left="100%" top="0">
                      {additionallyTwo.map(({ idB, name }) => (
                        <AdditionallyItems key={idB}>
                          {name}{' '}
                          {additionally.length === 0 ? null : (
                            <ArrowRightAdditionally />
                          )}
                        </AdditionallyItems>
                      ))}
                    </AdditionallyListTwo>
                  )}
                </AdditionallyItems>
              ))}
            </AdditionallyList>
          )}
        </ListProductItem>
      ))}
    </ProductList>
  );
}

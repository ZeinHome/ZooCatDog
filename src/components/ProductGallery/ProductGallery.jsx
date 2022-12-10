import { GiScales } from 'react-icons/gi';
import { MdDoneOutline } from 'react-icons/md';
import corm from '../../images/poducts/Сухой-корм-гипоаллергенный-для-взрослых-собак-всех-пород-Клуб-4-четыре-лапы-Актив-CLUB-4-PAWS-PREMIUM-ягненок-и-рис-400x400.jpg';

import {
  Section,
  SectionTitle,
  Gallery,
  GalleryItem,
  ProductImageCard,
  ProductInfoCard,
  GalleryItemTitle,
  PriceInfo,
  GalleryItemPrice,
  MainPrice,
  CodeCard,
  Purchase,
  Bye,
  Comparison,
  ByeText,
  ByeIcon,
} from './ProductGallery.styled';

const obj = [
  {
    id: 1,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 300,
    priceDiscount: 500,
    weight: 20,
  },
  {
    id: 2,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 300,
    priceDiscount: 700,
    weight: 50,
  },
  {
    id: 3,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 700,
    priceDiscount: 800,
    weight: 50,
  },
  {
    id: 4,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 1300,
    priceDiscount: 1500,
    weight: 2,
  },
  {
    id: 5,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 8,
    priceDiscount: 10,
    weight: 5,
  },
  {
    id: 6,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 300,
    priceDiscount: 350,
    weight: 4,
  },
  {
    id: 7,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 300,
    priceDiscount: 500,
    weight: 20,
  },
  {
    id: 8,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 300,
    priceDiscount: 700,
    weight: 50,
  },
  {
    id: 9,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 700,
    priceDiscount: 800,
    weight: 50,
  },
  {
    id: 10,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 1300,
    priceDiscount: 1500,
    weight: 2,
  },
  {
    id: 11,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 8,
    priceDiscount: 10,
    weight: 5,
  },
  {
    id: 12,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 300,
    priceDiscount: 350,
    weight: 4,
  },
  {
    id: 13,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 1300,
    priceDiscount: 1500,
    weight: 2,
  },
  {
    id: 14,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 8,
    priceDiscount: 10,
    weight: 5,
  },
  {
    id: 15,
    image: corm,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: 300,
    priceDiscount: 350,
    weight: 4,
  },
];

export default function ProductGallery({ title }) {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>

      <Gallery>
        {obj.map(({ id, image, text, price, priceDiscount, weight }) => (
          <GalleryItem key={id}>
            <ProductImageCard src={image} alt={text} />

            <ProductInfoCard>
              <GalleryItemTitle>{text}</GalleryItemTitle>

              <PriceInfo>
                <GalleryItemPrice>{weight}кг</GalleryItemPrice>

                <GalleryItemPrice>{price}грн</GalleryItemPrice>
                <MainPrice>{priceDiscount}грн</MainPrice>
                <CodeCard>Код: 80078</CodeCard>
              </PriceInfo>

              <Purchase>
                <Bye type="submit">
                  <ByeText>Купить</ByeText>
                  <ByeIcon>
                    <MdDoneOutline size={30} color="white" />
                  </ByeIcon>
                </Bye>

                <Comparison type="submit">
                  <GiScales size={30} color="black" />
                </Comparison>
              </Purchase>
            </ProductInfoCard>
          </GalleryItem>
        ))}
      </Gallery>
    </Section>
  );
}

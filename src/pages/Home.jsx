import Hero from 'components/Hero';
import ProductGallery from 'components/ProductGallery';
import InfoBlockZoo from 'components/InfoBlockZoo';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGallery title="Лидер продаж" />
      <ProductGallery title="Рекомендуем" />
      <InfoBlockZoo />
    </>
  );
}

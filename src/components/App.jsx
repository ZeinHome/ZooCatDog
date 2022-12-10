// import styled from 'styled-components';
// import { useRef } from 'react';
// import { FaArrowUp } from 'react-icons/fa';
// import { scrollToTop } from '../js/scrollToTop';
import { Routes, Route } from 'react-router-dom';
import { useMedia } from 'react-use';
import { Container } from './Container/Container.styled';

import Home from '../pages/Home';
import Showcase from '../pages/Showcase';
import ErrorPage from '../pages/ErrorPage';
import News from '../pages/News';
import Shop from '../pages/Shop';

import Header from './Header';
import Footer from './Footer';
import ListProduct from './ListProduct';

import { listProduct } from '../js/FakeAPI/listProduct'; //mono delait

// export const GoTop = styled.button`
//   position: fixed;
//   right: 30px;
//   bottom: 30px;
//   display: inline-block;
//   width: 64px;
//   height: 64px;
//   margin: 0;
//   padding: 5px;
//   border: none;
//   opacity: 0;
//   background: linear-gradient(
//     90deg,
//     rgba(249, 231, 254, 1) 35%,
//     rgba(218, 252, 252, 1) 100%
//   );
//   transition: background-position 1s ease-out;
//   border-radius: 50%;
//   z-index: 10;
//   cursor: pointer;
//   :hover {
//     background-position: 100px;
//   }
//   svg {
//     :hover {
//       fill: red;
//     }
//   }
// `;

export const App = () => {
  const isWide = useMedia('(min-width: 1200px)');

  // const BtnScrollToTop = useRef();

  // const showLog = message => {
  //   if (message.scrollY >= 2700 && BtnScrollToTop.current !== undefined) {
  //     BtnScrollToTop.current.style.opacity = 1;
  //   } else if (
  //     message.scrollY <= 2700 &&
  //     BtnScrollToTop.current !== undefined
  //   ) {
  //     BtnScrollToTop.current.style.opacity = 0;
  //   } else {
  //     return;
  //   }
  // };

  // window.onscroll = () => {
  //   const hasScrolling = !(window.scrollX === 0 && window.scrollY === 0);
  //   showLog({
  //     hasScrolling,
  //     scrollY: Math.round(scrollY),
  //   });
  // };
  // if (scrollX === 0 && scrollY === 0) {
  //   window.onscroll();
  // }

  return (
    <>
      <Header />
      {isWide ? (
        <Container>
          <ListProduct item={listProduct} />
        </Container>
      ) : null}
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/showcase" element={<Showcase />} />

        <Route path="/" element={<Home />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      {/* <GoTop ref={BtnScrollToTop} onClick={scrollToTop}>
        <FaArrowUp size={32} color="blue" />
      </GoTop> */}
    </>
  );
};

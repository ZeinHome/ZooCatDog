import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 15;
  visibility: ${props => (props.opened ? 'visible' : 'hidden')};
  opacity: ${props => (props.opened ? 1 : 0)};
  transition: opacity 0.3s ease-out, visibility 0.3s ease-out;
  overflow: hidden;
`;

export const DrawerContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  top: 0%;
  right: 0px;
  background-color: ${p => p.theme.colors.backgroundAllModal};
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);

  transform: ${props => (props.opened ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.3s ease-out;

  @media screen and (min-width: 1200px) {
    width: 50vw;
  }
`;

export const DrawerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.backgroundModalTitle};
  color: ${p => p.theme.colors.white};
  padding: 8px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`;

export const BasketListProducts = styled.ul``;

export const BoxOrder = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 5px 100px;
  @media screen and (min-width: 1200px) {
    width: 450px;
    margin: 0 auto;
    padding: 10px 5px;
  }
`;

export const Order = styled.ul`
  margin-top: auto;
`;

export const OrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  ::before {
    content: '';
    display: block;
    flex-grow: 1;
    height: 1px;
    width: auto;
    background-color: rgba(255, 255, 255, 0.61);
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const OrderTitle = styled.p`
  order: -1;
`;

export const ButtonOrder = styled.button`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.buttonOrder};
  border-radius: 18px;
  margin-top: 25px;
  padding: 18px 20px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.2;
  text-align: center;
  color: ${p => p.theme.colors.white};
  border: none;
  cursor: pointer;
  transform: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  &:hover,
  &:focus {
    background-color: lighten($color: #9dd558, $amount: 5%);
    svg {
      transform: translateX(5px);
    }
  }
`;

export const ButtonOrderText = styled.div`
  margin-right: 15px;
`;
// ----------------------------------
export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 3fr) 1fr;
  padding: 22px 0;
  background-color: ${p => p.theme.colors.cartBgMain};
  div {
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 1.2;

    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: ${p => p.theme.colors.black};
  }
`;

export const CartHeaderTitle = styled.div`
  grid-column-start: 2;
`;

export const CartFooter = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr 4fr;
  padding: 19px 0;
  background-color: ${p => p.theme.colors.cartBgMain};
  div {
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.ml};
    line-height: 1.2;

    color: ${p => p.theme.colors.black};
  }
  @media screen and (max-width: 600px) {
    padding: 19px 15px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const CartFooterCount = styled.div`
  grid-column-start: 2;
  @media screen and (max-width: 600px) {
    grid-column-start: 1;
  }
`;

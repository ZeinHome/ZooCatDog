import styled from 'styled-components';

import { GoChevronRight } from 'react-icons/go';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
  width: 250px;
  height: 100vh;
  top: 0%;
  left: 0px;
  background: ${p => p.theme.colors.backgroundAllModal};
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);

  transform: ${props => (props.opened ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.3s ease-out;
`;

export const DrawerTitle = styled.div`
  background-color: ${p => p.theme.colors.backgroundModalTitle};
  color: ${p => p.theme.colors.white};
  padding: 8px;
`;

export const ProductList = styled.ul``;

export const ListProductItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 250px;
  padding: 10px 30px;
  border-bottom: 1px solid ${p => p.theme.colors.backgroundAllModal};
  color: ${p => p.theme.colors.white};
`;

export const ListProductImages = styled.img`
  width: 2em;
  margin-right: 10px;
`;

export const ListProductText = styled.p`
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;
`;

export const ArrowRight = styled(GoChevronRight)`
  position: absolute;
  top: 14px;
  right: 5px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const AuthorizationText = styled.p`
  color: ${p => p.theme.colors.white};
`;

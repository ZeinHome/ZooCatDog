import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export const FooterSection = styled.footer`
  padding: 50px 0px;
  background-color: ${p => p.theme.colors.footer};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Container = styled.div`
  max-width: 1420px;
  margin: 0px auto;
  padding: 0px 15px;
`;

export const FooterContainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const FooterWrapper = styled.div`
  :not(:last-child) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1200px) {
    padding: 5px 10px;
  }
`;

export const FooterTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${p => p.theme.colors.black};
`;

export const FooterList = styled.ul``;

export const FooterItem = styled.li`
  color: ${p => p.theme.colors.text};
  font-weight: 400;
  font-size: 18px;
  :not(:last-child) {
    margin-bottom: 8px;
  }
  a {
    color: ${p => p.theme.colors.text};
    font-weight: 400;
    font-size: 22px;
    :hover {
      color: orange;
    }
  }
`;

export const FooterGroupItem = styled.div`
  @media screen and (max-width: 479px) {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 480px) and (max-width: 1199px) {
    margin-bottom: 0;
    :last-child {
      margin-left: 15%;
    }
  }
`;

export const MobileContainer = styled.div`
  @media screen and (max-width: 479px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 480px) and (max-width: 1199px) {
    display: flex;
    margin: 20px 0px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const SocialNetworkList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SocialNetworkLink = styled.a`
  transition: 0.6s;
  box-shadow: 0 5px 4ppx rgba(0, 0, 0, 0.5);
  :not(:last-child) {
    margin-right: 50px;
  }
`;

export const SocialNetworkItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 15px;
  background-color: ${p => p.theme.colors.black};
  border-radius: 50%;
  transition: 0.5s;
  transition-duration: 0.25s;
  transition-property: outline-offset, outline-color, background-color;

  &:hover {
    background-image: ${props => props.bgImg};
    background-color: ${props => props.hover};
    transform: translate(0, -10%);
    animation: shake 1.5s;
  }

  @keyframes shake {
    10% {
      transform: rotate(10deg);
    }
    20% {
      transform: rotate(-10deg);
    }
    30% {
      transform: rotate(10deg);
    }
    40% {
      transform: rotate(-10deg);
    }
  }
`;

export const WorkingHours = styled.li`
  color: ${p => p.theme.colors.text};
  font-weight: 400;
  font-size: 28px;
`;

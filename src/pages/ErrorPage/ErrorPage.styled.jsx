import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1420px;
  margin: 0px auto;
  padding: 0px 15px;
`;

export const Page404 = styled.section`
  background-color: #fff;
  font-family: 'Arvo', serif;
  padding: 20px 0;
`;

export const FourZeroFourBg = styled.div`
  /* background-image: url(https://ichef.bbci.co.uk/news/640/cpsprodpb/14A82/production/_116301648_gettyimages-1071204136.jpg);  */ //как вариант
  background-image: url(https://i.gifer.com/origin/33/3330fd236463c0aabd122b43100d738f_w200.gif);
  height: 350px;
  background-position: center;
  background-size: cover;
  @media screen and (min-width: 767px) {
    height: 600px;
  }
`;

export const MainTitle = styled.h1`
  text-align: center;
  font-size: 80px;
`;

export const Title = styled.h2`
  font-size: 30px;
  @media screen and (min-width: 800px) {
    font-size: 80px;
  }
`;

export const Text = styled.p`
  font-size: 19px;
  @media screen and (min-width: 800px) {
    font-size: 40px;
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  color: #fff;
  padding: 15px 35px;
  background-color: #39ac31;
  margin: 20px 0;
`;

export const ContainerBox404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

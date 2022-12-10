import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 0px;
  color: ${p => p.theme.colors.text};
`;

export const InfoContainer = styled.div`
  max-width: 1470px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Info = styled.ul``;

export const InfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const MainTitle = styled.h3`
  text-align: center;
  font-size: 2em;
  line-height: 1.1;
  margin-bottom: 15px;
  @media screen and (min-width: 767px) and (max-width: 1199px) {
    margin-bottom: 30px;
  }
`;

export const InfoText = styled.p`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const PictureText = styled.p`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const InfoTitle = styled.h4`
  text-align: center;
  font-size: 1.6em;
  line-height: 1.1;
  margin-bottom: 20px;
  @media screen and (min-width: 767px) and (max-width: 1199px) {
    margin-bottom: 30px;
  }
`;

export const Picture = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const PictureItem = styled.li`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    min-width: 196px;
    :not(:last-child) {
      margin-right: 30px;
    }
  }
`;

export const InfoImages = styled.img`
  @media screen and (min-width: 1200px) {
    width: 200px;
    height: 200px;
  }
`;

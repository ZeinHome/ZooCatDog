import styled from 'styled-components';

export const ChatButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 0;
  padding: 5px;
  border: none;
  opacity: 0;
  background: linear-gradient(
    90deg,
    rgba(249, 231, 254, 1) 35%,
    rgba(218, 252, 252, 1) 100%
  );
  transition: background-position 1s ease-out;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  :hover {
    background-position: 100px;
  }
  svg {
    :hover {
      fill: red;
    }
  }
`;

export const ShowcaseSection = styled.section`
  padding: 40px 0;
`;

export const Container = styled.div`
  max-width: 1420px;
  margin: 0px auto;
  padding: 0px 15px;
`;

export const ShowcaseTitle = styled.h2`
  font-size: 2rem;
  line-height: 1.1;
  color: #000;
  margin-bottom: 20px;
`;

export const ShowcaseList = styled.ul`
  @media screen and (min-width: 568px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ShowcaseItem = styled.li`
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 30px;
  text-align: center;
  font-style: normal;
  font-size: 18px;
  font-weight: 600;
  background-color: #e6e6e6ac;
  @media screen and (max-width: 567px) {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 568px) and (max-width: 1099px) {
    width: calc((100% - 30px) / 2);
    margin-right: 30px;
    &:nth-child(2n + 2) {
      margin-right: 0;
    }
    &:nth-last-child(-n + 2) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1399px) {
    width: calc((100% - 90px) / 3);
    margin-right: 30px;
    &:nth-child(3n + 3) {
      margin-right: 0;
    }
    &:nth-last-child(-n + 2) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1400px) {
    width: calc((100% - 120px) / 4);
    margin-right: 30px;
    &:nth-child(4n + 4) {
      margin-right: 0;
    }
    &:nth-last-child(-n + 4) {
      margin-bottom: 0px;
    }
  }
`;

export const ShowcaseImage = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 8px 8px 0 0;
  @media screen and(min-width: 1199px) {
    width: 450px;
  }
`;

export const ShowcaseInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 10px;
  border-top: 1px solid black;
`;

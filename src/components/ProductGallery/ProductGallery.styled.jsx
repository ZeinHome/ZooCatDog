import styled from 'styled-components';

export const Section = styled.section`
  margin: 0px auto;
  padding: 50px 15px;
  border-bottom: 1px solid ${p => p.theme.colors.border};
  border-top: 1px solid ${p => p.theme.colors.border};
`;

export const SectionTitle = styled.h2`
  display: inline-block;
  font-size: 1.5rem;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(28, 28, 28);
  max-width: 100%;
  padding: 0px 20px;
`;

export const Gallery = styled.ul`
  margin-top: 40px;
  @media screen and (min-width: 568px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const GalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 10px;
  transition: box-shadow 0.3s;
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
    &:nth-last-child(-n + 1) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1399px) {
    width: calc((100% - 90px) / 3);
    margin-right: 30px;
    &:nth-child(3n + 3) {
      margin-right: 0;
    }
    &:nth-last-child(-n + 3) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1400px) {
    width: calc((100% - 150px) / 5);
    margin-right: 30px;
    &:nth-child(5n + 5) {
      margin-right: 0;
    }
    &:nth-last-child(-n + 5) {
      margin-bottom: 0px;
    }
  }

  :hover {
    box-shadow: 0 9px 20px rgba(223, 223, 240, 0.9);
  }
`;

export const ProductImageCard = styled.img`
  width: 100%;
  height: 350px;
`;

export const ProductInfoCard = styled.div`
  padding: 20px;
`;

export const GalleryItemTitle = styled.h3`
  text-align: center;
  margin-top: 10px;
  color: ${p => p.theme.colors.cardTitle};
`;

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  padding: 5px 20px;
  border: 2px solid blue;
  border-radius: 15px;
`;

export const GalleryItemPrice = styled.p`
  font-size: 17px;
  color: ${p => p.theme.colors.black};
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const MainPrice = styled.span`
  font-weight: 400;
  font-size: 12px;
  text-decoration: line-through;
  color: ${p => p.theme.colors.oldPrice};
`;

export const CodeCard = styled.span`
  margin-left: auto;
  font-weight: 500;
  font-size: 11px;
  color: ${p => p.theme.colors.code};
`;

export const Purchase = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Bye = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% + 4px);
  padding: 15px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  border: 2px solid #ededf9;
  line-height: 1;
  font-weight: 700;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: width 0.5s;
  * {
    transition: opacity 0.25s;
  }

  :focus {
    width: 64px;
    height: 67px;
    background-color: #44c08a;
    border-radius: 40%;
  }
  :focus span {
    opacity: 0;
  }
  :focus i {
    opacity: 1;
    transition-delay: 0.5s;
  }
`;

export const ByeText = styled.span``;

export const ByeIcon = styled.i`
  position: absolute;
  opacity: 0;
`;

export const Comparison = styled.button`
  padding: 15px;
  margin-left: 10px;
  background-color: ${p => p.theme.colors.white};
  border: 2px solid #ededf9;
  border-radius: 8px;
`;

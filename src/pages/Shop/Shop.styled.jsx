import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1420px;
  margin: 0px auto;
  padding: 0px 15px;
`;

export const Section = styled.section`
  padding: 40px 0;
  background-color: ${p => p.theme.colors.white};
`;

export const MainTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 28px;
`;

export const List = styled.ul``;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const InfoBox = styled.div`
  margin-bottom: 25px;
`;

export const FirstTitle = styled.h4`
  margin-bottom: 15px;
  font-size: 28px;
  color: ${p => p.theme.colors.text};
`;

export const Title = styled.h4`
  margin-bottom: 15px;
  font-size: 22px;
  color: ${p => p.theme.colors.text};
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${p => p.theme.colors.text};
`;

export const ListSecond = styled.ul`
  margin: 1.1em;
`;

export const Itemecond = styled.li`
  list-style: circle;
  font-size: 18px;
  color: ${p => p.theme.colors.text};
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

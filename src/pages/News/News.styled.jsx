import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1420px;
  margin: 0px auto;
  padding: 0px 15px;
`;

export const Section = styled.section`
  padding: 80px 0;
`;

export const Item = styled.li`
  :not(:first-child) {
    margin-top: 40px;
  }
`;

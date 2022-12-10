import {
  Page404,
  Container,
  FourZeroFourBg,
  MainTitle,
  Title,
  Text,
  Link,
  ContainerBox404,
} from './ErrorPage.styled';

export default function ErrorPage() {
  return (
    <Page404>
      <Container>
        <FourZeroFourBg>
          <MainTitle>404</MainTitle>
        </FourZeroFourBg>
        <ContainerBox404>
          <Title>Похоже, ты потерялся</Title>
          <Text>страница, которую вы ищете, недоступна!</Text>
          <Link to="/">Вернутся домой</Link>
        </ContainerBox404>
      </Container>
    </Page404>
  );
}

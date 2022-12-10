import { Container, Section, Item } from './News.styled';

export default function News() {
  return (
    <Section>
      <Container>
        <h2>Новости</h2>
        <ul>
          <Item>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, quod tempora. Porro minus nemo voluptates repellat qui
            voluptatem, facilis laudantium ex esse eos nostrum ut est ea dolorum
            tenetur debitis.
          </Item>
          <Item>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, quod tempora. Porro minus nemo voluptates repellat qui
            voluptatem, facilis laudantium ex esse eos nostrum ut est ea dolorum
            tenetur debitis.
          </Item>
          <Item>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, quod tempora. Porro minus nemo voluptates repellat qui
            voluptatem, facilis laudantium ex esse eos nostrum ut est ea dolorum
            tenetur debitis.
          </Item>
        </ul>
      </Container>
    </Section>
  );
}

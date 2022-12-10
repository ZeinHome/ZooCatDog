import { useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { list } from '../../js/FakeAPI/listShowcase';

import { scrollToTop } from '../../js/scrollToTop';
import {
  ChatButton,
  ShowcaseSection,
  Container,
  ShowcaseTitle,
  ShowcaseList,
  ShowcaseItem,
  ShowcaseImage,
  ShowcaseInfo,
} from './Showcase.styled';

export default function Showcase() {
  const BtnScrollToTop = useRef();

  return (
    <ShowcaseSection>
      <Container>
        <ShowcaseTitle>Витрина</ShowcaseTitle>
        <ShowcaseList>
          {list.map(({ id, image, title }) => (
            <ShowcaseItem key={id}>
              <ShowcaseImage src={image} alt={title} />
              <ShowcaseInfo>
                <p>{title}</p>
              </ShowcaseInfo>
            </ShowcaseItem>
          ))}
        </ShowcaseList>
        <ChatButton ref={BtnScrollToTop} onClick={scrollToTop}>
          <FaArrowUp size={30} color="blue" />
        </ChatButton>
      </Container>
    </ShowcaseSection>
  );
}

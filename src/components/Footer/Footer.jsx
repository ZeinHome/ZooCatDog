import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { scrollToTop } from '../../js/scrollToTop';

import {
  Link,
  FooterSection,
  Container,
  FooterContainer,
  FooterWrapper,
  FooterTitle,
  FooterList,
  FooterItem,
  FooterGroupItem,
  MobileContainer,
  SocialNetworkList,
  SocialNetworkLink,
  SocialNetworkItem,
  WorkingHours,
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <FooterContainer>
          <FooterGroupItem>
            <FooterWrapper>
              <FooterTitle>☝ Информация</FooterTitle>
              <FooterList>
                <FooterItem>
                  <Link to="/news" onClick={scrollToTop}>
                    Новости
                  </Link>
                </FooterItem>
                <FooterItem>
                  <Link to="/shop" onClick={scrollToTop}>
                    О нас – наши магазины
                  </Link>
                </FooterItem>
                <FooterItem>Оплата и доставка</FooterItem>
                <FooterItem>
                  <Link to="/showcase" onClick={scrollToTop}>
                    Витрина
                  </Link>
                </FooterItem>
              </FooterList>
            </FooterWrapper>

            <FooterWrapper>
              <FooterTitle>⭐ Личный кабинет</FooterTitle>
              <FooterList>
                <FooterItem>Личный кабинет</FooterItem>
                <FooterItem>История заказов</FooterItem>
                <FooterItem>Недавно просмотренные</FooterItem>
              </FooterList>
            </FooterWrapper>
          </FooterGroupItem>

          <MobileContainer>
            <FooterGroupItem>
              <FooterWrapper>
                <FooterTitle>⚡ E-mail</FooterTitle>
                <FooterList>
                  <FooterItem>
                    на связи 24 часа в сутки
                    <br /> {/* mailto:zoomir1984@gmail.com */}
                    zoomir1984@gmail.com
                    <br /> {/* mailto:info@zoocat-dog.com */}
                    info@zoocat-dog.com
                  </FooterItem>
                </FooterList>
              </FooterWrapper>

              <FooterWrapper>
                <FooterTitle>✈ Служба поддержки</FooterTitle>
                <FooterList>
                  <FooterItem>Связаться с нами</FooterItem>
                  <FooterItem>Возврат товара</FooterItem>
                  <FooterItem>Карта сайта</FooterItem>
                  <FooterItem>Договор публичной оферты</FooterItem>
                  <FooterItem>Политика конфиденциальности</FooterItem>
                </FooterList>
              </FooterWrapper>
            </FooterGroupItem>

            <FooterGroupItem>
              <FooterWrapper>
                <FooterTitle>➤ Время работы</FooterTitle>
                <FooterList>
                  <WorkingHours>
                    с 9:00 — 19:00, без выходных
                    <br /> вс-пн только онлайн заказы
                  </WorkingHours>
                </FooterList>
              </FooterWrapper>

              <FooterWrapper>
                <FooterTitle> ☎ Свяжитесь с нами</FooterTitle>
                <FooterList>
                  <FooterItem>
                    <a href="tel:++380985632615">+380985632615</a>
                  </FooterItem>
                  <FooterItem>
                    <a href="tel:++380662274925">+380662274925</a>
                  </FooterItem>
                </FooterList>
              </FooterWrapper>
            </FooterGroupItem>
          </MobileContainer>
          <FooterWrapper>
            <FooterTitle>✅ Присоединяйтесь</FooterTitle>

            <SocialNetworkList>
              <SocialNetworkLink
                href="https://instagram.com/zoomir_dp?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <SocialNetworkItem
                  hover="#e95950"
                  bgImg="radial-gradient(
                   #fdf497 0%,
                   #fdf497 5%,
                   #fd5949 45%,
                   #d6249f 60%,
                   #285feb 90%
                )"
                >
                  <BsInstagram size={35} color="#fff" />
                </SocialNetworkItem>
              </SocialNetworkLink>

              <SocialNetworkLink
                href=" https://www.facebook.com/zoocatdogDnepr/?_ga=2.44189603.682315253.1649591368-1426558127.1635265670"
                target="_blank"
              >
                <SocialNetworkItem hover="#1da1f2">
                  <FaFacebookF size={35} color="#fff" />
                </SocialNetworkItem>
              </SocialNetworkLink>

              <SocialNetworkLink
                href="https://www.youtube.com/channel/UCeIqoeEywOwkHtMvvNQ0voA"
                target="_blank"
              >
                <SocialNetworkItem hover="red">
                  <BsYoutube size={35} color="#fff" />
                </SocialNetworkItem>
              </SocialNetworkLink>
            </SocialNetworkList>
          </FooterWrapper>
        </FooterContainer>
      </Container>
    </FooterSection>
  );
}

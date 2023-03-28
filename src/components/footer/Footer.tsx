import Container from '../../helperComponentsStyled/Conteiner';
import { FooterStl } from './footer.styled';
import { FooterCategoryBlock } from './footerComponents/FooterCategoryBlock';
import { FooterContactsBlock } from './footerComponents/FooterContactsBlock';
import { FooterMainBlock } from './footerComponents/FooterMainBlock';
import { FooterMenuBlock } from './footerComponents/FooterMenuBlock';
import { FooterPriceListBlock } from './footerComponents/FooterPriceListBlock';

export const Footer = () => {
    return (
        <FooterStl>
            <Container>
                <div className='footer__wrapper'>
                    <FooterMainBlock />
                    <FooterMenuBlock />
                    <FooterCategoryBlock />
                    <FooterPriceListBlock />
                    <FooterContactsBlock />
                </div>
            </Container>
        </FooterStl>
    );
};
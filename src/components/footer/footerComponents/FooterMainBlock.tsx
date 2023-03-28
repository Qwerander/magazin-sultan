import { FooterBlockStl } from './footerBlock.styled';
import { ReactComponent as FooterLogoSVG } from '../../../assets/img/footerLogo.svg';
import { ReactComponent as DownloadSVG } from '../../../assets/icons/download.svg';
import { SearchForm } from '../../../ui/SearchForm';
import { useResize } from '../../../hooks/useResize';
import { Button } from '../../../ui/Button';


export const FooterMainBlock = () => {
    const [resize450] = useResize(448);
    return (
        <FooterBlockStl>
            {!resize450 &&
                <div className='footer__button'>
                    <Button 
                        padding='12px 27px'
                        text='Прайс&nbsp;-&nbsp;лист'
                        >
                        <DownloadSVG />
                    </Button>
                </div>
            }
            <FooterLogoSVG />
            <p className='footer__text'>
                Компания «Султан» — снабжаем розничные магазины товарами
                "под ключ" в Кокчетаве и Акмолинской области
            </p>
            <span className='footer__subscribe'>
                Подпишись на скидки и акции
            </span>
            <SearchForm
                width='282px'
                formSubmit={() => { }}
                subscribe
                placeholder='Введите ваш E-mail'
                bgColor='var(--white)'
            />
        </FooterBlockStl>
    );
};
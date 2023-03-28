import Container from '../../helperComponentsStyled/Conteiner';
import { HeaderStl } from './header.styled';
import { HeaderNav } from './headerComponents/HeaderNav';
import { HeaderTopLeft } from './headerComponents/HeaderTopLeft';
import { ReactComponent as HeaderLogoSVG } from '../../assets/img/logo.svg'
import { ReactComponent as CatalogSVG } from '../../assets/icons/catalog.svg'
import { ReactComponent as DownloadSVG } from '../../assets/icons/download.svg'
import { Button } from '../../ui/Button';
import { SearchForm } from '../../ui/SearchForm';
import { HeaderOrderCall } from './headerComponents/HeaderOrderCall';
import { HeaderCart } from './headerComponents/HeaderCart';
import { useNavigate } from 'react-router-dom';
import { useResize } from '../../hooks/useResize';
import { HeaderMenu } from './headerComponents/HeaderMenu';
import { Header420Bottom } from './headerComponents/Header420Bottom';

export const Header = () => {
    const navigate = useNavigate()
    const [resize1250] = useResize(1250);
    const [resize1000] = useResize(1000);
    const [resize768] = useResize(770);
    const [resize640] = useResize(640);
    const [resize420] = useResize(420);

    return (
        <HeaderStl>
            <div className="header__top">
                {!resize1000 &&
                    <Container>
                        <HeaderMenu />
                        <span style={{margin: '0 auto'}}>
                            <HeaderLogoSVG />
                        </span>
                        {!resize768 && <HeaderCart />}
                    </Container>
                }
                {resize768 &&
                    <Container>
                        <HeaderTopLeft />
                        {resize1000 && <HeaderNav />}
                    </Container>}
            </div>
            <div className="header__bottom">
                <Container gap='5px'>
                    {resize1000 &&
                        <HeaderLogoSVG />
                    }
                    {!resize420 &&
                        <Header420Bottom />
                    }
                    {resize420 &&
                        <>
                            <Button text='Каталог' handleClick={() => navigate('/catalog')}>
                                <CatalogSVG />
                            </Button>
                            <SearchForm width='263px' formSubmit={() => { }} />
                        </>
                    }
                    {resize1250 &&
                        <HeaderOrderCall />
                    }
                    {resize640 &&
                        <Button text='Прайс&nbsp;-&nbsp;лист'>
                            <DownloadSVG />
                        </Button>
                    }
                    {resize768 &&
                        <HeaderCart />
                    }
                </Container>
            </div>
        </HeaderStl>
    );
};
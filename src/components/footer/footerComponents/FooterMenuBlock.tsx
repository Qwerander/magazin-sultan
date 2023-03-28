import { NavLink } from 'react-router-dom';
import { FooterBlockStl } from './footerBlock.styled';


export const FooterMenuBlock = () => {
    return (
        <FooterBlockStl>
            <h2 className='footer__title'>
                Меню сайта:
            </h2>
            <NavLink to={'/'} className='footer__link'>
                О компании
            </NavLink>
            <NavLink to={'/'} className='footer__link'>
                Доставка и оплата
            </NavLink>
            <NavLink to={'/'} className='footer__link'>
                Возврат
            </NavLink>
            <NavLink to={'/'} className='footer__link'>
                Контакты
            </NavLink>
        </FooterBlockStl>
    )
};
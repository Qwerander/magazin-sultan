import { NavLink } from 'react-router-dom';
import { FooterBlockStl } from './footerBlock.styled';


export const FooterCategoryBlock = () => {
    return (
        <FooterBlockStl>
            <h2 className='footer__title'>
                Категории:
            </h2>
            <NavLink to={'/'} className='footer__link'>
                Бытовая химия
            </NavLink>
            <NavLink to={'/'} className='footer__link'>
                Косметика и гигиена
            </NavLink>
            <NavLink to={'/'} className='footer__link'>
                Товары для дома
            </NavLink>
            <NavLink to={'/'} className='footer__link'>
                Товары для детей и мам
            </NavLink>
            <NavLink to={'/'} className='footer__link'>
                Посуда
            </NavLink>
        </FooterBlockStl>
    )
};
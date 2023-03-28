import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const HeaderNavStl = styled.nav`
    display: flex;
    width: 48%;
    justify-content: space-between;
    .nav {
        &__link {
            display: inline-block;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
        }
    }

    @media (max-width: 998px) {
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
`;

export const HeaderNav = () => {
    
    return (
        <HeaderNavStl>

            <NavLink to="/about" className="nav__link">
                О компании
            </NavLink>
            <NavLink to="/delivery" className="nav__link">
                Доставка и оплата
            </NavLink>
            <NavLink to="/return" className="nav__link">
                Возврат
            </NavLink>
            <NavLink to="/contacts" className="nav__link">
                Контакты
            </NavLink>
        </HeaderNavStl>
    );
};
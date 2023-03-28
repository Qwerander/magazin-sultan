import { useState } from 'react';
import { ReactComponent as CatalogSVG } from '../../../assets/icons/catalogMenu.svg'
import { ReactComponent as SearchSVG } from '../../../assets/icons/searchMenu.svg'
import { SearchForm } from '../../../ui/SearchForm';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBottomStl = styled.div`
    display: flex;
    width: 100%;
    .block {
        display: flex;
        gap: 6px;
        align-items: center;
        justify-content: center;
        width: 50%;    
        cursor: pointer;
        &--right {  
            border-left: 1px dotted var(--grey);
            position: relative;
            form {
                position: absolute;
                bottom: 0;
                left: 0;
                transform: translate(-50%, 100%);
                z-index: 10000;
            }
        }
    }
`

export const Header420Bottom = () => {
    const [isOpenSearch, toggleIsOpenSearh] = useState(false);

    return (
        <HeaderBottomStl> 
            <div className="block">
                <CatalogSVG />
                <NavLink to={'/catalog'} >
                    Каталoг
                </NavLink>
            </div>
            <div className="block block--right" onClick={() => toggleIsOpenSearh(prev => !prev)}>
                <SearchSVG />
                <span>Поиск</span>
                {isOpenSearch &&
                    <SearchForm width='220px' formSubmit={() => { }} />
                }
            </div>
        </HeaderBottomStl>
    );
}
import { useState } from "react";
import { Button } from "../../../ui/Button";
import { ReactComponent as BurgerSvg } from "../../../assets/icons/burger.svg";
import { ReactComponent as BurgerCloseSvg } from "../../../assets/icons/closeBurger.svg";
import { ReactComponent as DownloadSVG } from '../../../assets/icons/download.svg'
import { HeaderNav } from "./HeaderNav";
import styled from 'styled-components';
import { HeaderOrderCall } from "./HeaderOrderCall";
import { useResize } from "../../../hooks/useResize";
import { HeaderTopLeft } from "./HeaderTopLeft";

const MenuStl = styled.div`
    display: flex;
    flex-direction: row-reverse; 
    justify-content: space-between;
    position: absolute;
    padding: 15px;
    background-color: var(--white);
    width: 100%;
    top: 0px;
    left: 0;
    z-index: 500;
    transform: translateY(200px);
    box-shadow: var(--shadow);
    .menu {
        &__top {
            width: 100%;
            border-bottom: 1px dashed var(--grey);
        }
        &__bottom {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 25px;
            width: 100%;
        }
        &__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 150%;
            color: var(--dark);     
        }

    }
    @media (max-width: 560px) {
        flex-direction: column;
    }

    @media (max-width: 420px) {
        transform: translateY(130px);
    }
`;

export const HeaderMenu = () => {
    const [isBurgerOpen, toggleIsBurgerOpen] = useState(false)
    const [resize768] = useResize(768);
    const [resize640] = useResize(640);

    return (
        <div className='menu'>
            <Button
                text=""
                padding="12px"
                zIndex="1000"
                handleClick={() => toggleIsBurgerOpen(prev => !prev)}
            >
                {!isBurgerOpen
                    ? <BurgerSvg />
                    : <BurgerCloseSvg />
                }
            </Button>
            {isBurgerOpen &&
                <MenuStl>
                    <div className="menu__top">
                        {!resize768 &&
                            <HeaderTopLeft />
                        }
                        <HeaderOrderCall />
                    </div>
                    <div className="menu__bottom">
                        <h2 className="menu__title">Меню сайта:</h2>
                        <HeaderNav />
                        {!resize640 &&
                            <Button
                                text='Прайс&nbsp;-&nbsp;лист'
                                self="flex-start"
                            >
                                <DownloadSVG />
                            </Button>
                        }
                    </div>
                </MenuStl>
            }
        </div>
    )

}
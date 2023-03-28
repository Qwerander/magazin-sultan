import { FooterBlockStl } from './footerBlock.styled';
import { ReactComponent as VisaSVG } from '../../../assets/icons/visa.svg';
import { ReactComponent as MasterCardSVG } from '../../../assets/icons/masterCard.svg';

export const FooterContactsBlock = () => {
    return (
        <FooterBlockStl>
            <h2 className='footer__title'>
                Контакты:
            </h2>
            <div className='footer__phone'>
                <span>
                    +7 (777) 490-00-91
                </span>
                <span>
                    время работы: 9:00-20:00
                </span>
                <span>
                    Заказать звонок
                </span>
            </div>
            <div className='footer__mail'>
                <span>
                    opt.sultan@mail.ru
                </span>
                <span>
                    На связи в любое время
                </span>
            </div>
            <div className='footer__cards'>
                <VisaSVG />
                <MasterCardSVG />
            </div>
        </FooterBlockStl>
    );
};
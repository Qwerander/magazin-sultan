import { ReactComponent as PlaceMarkSVG } from '../../../assets/icons/placeMark.svg';
import { ReactComponent as MailSVG } from '../../../assets/icons/mail.svg';

export const HeaderTopLeft = () => {
    
    return (
        <div className="header__top-left">
            <div className="header__wrapper">
                <PlaceMarkSVG />
                <p>
                    г. Кокчетав, ул. Ж. Ташенова 129Б
                    <span>
                        (Рынок Восточный)
                    </span>
                </p>
            </div>
            <div className="header__wrapper">
                <MailSVG />
                <p>
                    opt.sultan@mail.ru
                    <span>
                        На связи в любое время
                    </span>
                </p>
            </div>
        </div>
    );
};
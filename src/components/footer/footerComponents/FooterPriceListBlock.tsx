import { Button } from '../../../ui/Button';
import { FooterBlockStl } from './footerBlock.styled';
import { ReactComponent as DownloadSVG } from '../../../assets/icons/download.svg';
import { ReactComponent as WhatsUpSVG } from '../../../assets/icons/whatsUp.svg';
import { ReactComponent as TelegramSVG } from '../../../assets/icons/telegram.svg';

export const FooterPriceListBlock = () => {
    return (
        <FooterBlockStl>
            <h2 className='footer__title'>
                Скачать прайс-лист:
            </h2>
            <Button
                text='Прайс&nbsp;-&nbsp;лист'
                self='flex-start'
            >
                <DownloadSVG />
            </Button>
            <span className='footer__connection'>
                Связь в мессенджерах:
            </span>
            <div className='footer__social'>
                <WhatsUpSVG />
                <TelegramSVG />
            </div>
        </FooterBlockStl>
    );
};
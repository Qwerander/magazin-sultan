import styled from 'styled-components';
import { ReactComponent as OrderCallSVG } from '../../../assets/img/orderCall.svg'
import { ReactComponent as PhoneSVG } from '../../../assets/icons/phone.svg'
import { ReactComponent as PhoneCallSVG } from '../../../assets/icons/phoneCall.svg'
import { useResize } from '../../../hooks/useResize';
import { Button } from '../../../ui/Button';

const HeaderOrderCallStl = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    .left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 5px;
        span:first-child {
            font-weight: 600;
            font-size: 14px;
            line-height: 150%;
            color: var(--black);
        }
        span:last-child {
            text-decoration: underline;
        }
    }
    .call {
        font-weight: 300;
        font-size: 12px;
        line-height: 150%;
        color: var(--dark);
        &--bottom {
            display: flex;
            gap: 18px;
            text-decoration: underline;
            align-items: center;
        }
    }
    .title {
        display: none;
    }
    
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 25px;
        .left {
            align-items: flex-start;
            span:last-child {
                display: none;
            }
        }
        .title {
            display: block;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
        }
        .wrapper {
            display: flex;
            gap: 18px;
            svg {
                margin-top: 10px;
            }
        }
  
    }
    
`;

export const HeaderOrderCall = () => {
    const [resize1000] = useResize(1000);
    
    return (
        <HeaderOrderCallStl>
            <div className='wrapper'>
                {!resize1000 && <PhoneSVG />}
                <div>
                    <h4 className='title'>
                        Отдел продаж
                    </h4>
                    <div className='left'>
                        <span className='call'>
                            +7 (777) 490-00-91
                        </span>
                        <span className='call'>
                            время работы: 9:00-20:00
                        </span>
                        <span className='call'>
                            Заказать звонок
                        </span>
                    </div>
                </div>
            </div>
            {resize1000
                ? <OrderCallSVG />
                : <div className='call call--bottom'>
                    <Button
                        text=""
                        padding="10px"
                    >
                        <PhoneCallSVG />
                    </Button>
                    Заказать звонок
                </div>}
        </HeaderOrderCallStl>
    );
};
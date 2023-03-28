import styled from 'styled-components';

export const CardStl = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 50px 0; 
    border-top: 1px dashed var(--grey);
    .card {
        &__top {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 20px;
 
        }
        &__img {
            text-align: center;
            img {
                height: 137px;
            }
        }
        &__content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-start
        }
        &__volume {
            display: flex;
            gap: 5px;
            font-weight: 400;
            font-size: 12px;
            line-height: 130%;
            color: var(--dark);
        }
        &__title {
            font-weight: 700;
            font-size: 30px;
            line-height: 36px;
            color: var(--black);
            cursor: pointer;
        }
        &__descr {
            font-weight: 300;
            font-size: 12px;
            line-height: 150%;
            color: var(--dark);
        }
        &__bottom {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            & > *:not(:last-child) {
                padding: 0 44px;
                border-left: 1px dashed var(--grey);
                border-right: 1px dashed var(--grey);
            }
            & > *:first-child {
                border-left: 1px dashed var(--grey);
                border-right: none;
            }            
        }

        &__amount {
            margin-right: 44px;
            font-weight: 700;
            font-size: 30px;
            line-height: 130%;
            color: var(--black);
        }
    }

    @media (max-width: 1050px) {
        .card {
            &__bottom {
                & > *:not(:last-child) {
                    padding: 0 15px;
                } 
            }
            &__amount {
                margin-right: 15px;
            }
        }
    }
    @media (max-width: 768px) {
        padding: 20px 0;
        gap: 15px;
        grid-template-columns: 1fr;
    }
    
    @media (max-width: 400px) {
        .card {
            &__top {
                grid-template-columns: 1fr;
                gap: 10px;
            }
            &__title {
                font-size: 20px;
            }
            &__amount {
                margin-right: 5px;
                font-size: 16px;
            }
        }


    }
`;
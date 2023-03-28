import styled from 'styled-components';

export const CardStl = styled.div`
    display: flex;
    flex-direction: column;
    padding: 42px 21px 29px 23px; 
    width: 100%;
    box-shadow: var(--shadow);
    border-radius: 10px;
    .card {
        &__img {
            text-align: center;
            img {
                height: 137px;
            }
        }
        &__content {
            margin-bottom: 15px;
            display: flex;
            flex-direction: column;
            align-items: flex-start
        }
        &__volume {
            display: flex;
            gap: 5px;
            margin-bottom: 10px;
            font-weight: 400;
            font-size: 12px;
            line-height: 130%;
            color: var(--dark);
        }
        &__title {
            margin-bottom: 20px;
            font-weight: 700;
            font-size: 16px;
            line-height: 130%;
            color: var(--black);
            cursor: pointer;
        }
        &__specifications {
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            color: var(--black);
            &:not(:last-child) {
                margin-bottom: 5px;
            }
            span {
                font-weight: 300;
                color: var(--dark);
            }
        }
        &__bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
        }

        &__amount {
            font-weight: 800;
            font-size: 16px;
            line-height: 130%;
            color: var(--black);
        }

        &__care {
            display: flex;
            gap: 5;
            span {
                display: flex;
                flex-direction: column;
            }
            div {
                margin-left: 5px;
                font-size: 10px;
            }
        }
    }
`;
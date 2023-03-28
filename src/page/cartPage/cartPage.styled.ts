import styled from 'styled-components';

export const CartPageStl = styled.section`
    padding: 50px 0 100px;
    width: 100%;
    background-color: var(--white);
    .cart {
        &__wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
        }
        &__title {
            margin-bottom: 50px;
            font-weight: 500;
            font-size: 40px;
            line-height: 120%;
            text-transform: uppercase;
            color: var(--black);
        }
        &__list {
            margin-bottom: 50px;
            display: flex;
            flex-direction: column;
            border-bottom: 1px dashed var(--grey);
        }
        &__arrange {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        &__amount {
            font-weight: 700;
            font-size: 30px;
            line-height: 130%;
            color: var(--black);
        }

        &__back {
            margin-bottom: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-left: 20px;
            gap: 5px;
        }
    }

    @media (max-width: 600px) {
        .cart {
            &__title {
                font-size: 20px;
            }
        }
    }
    @media (max-width: 400px) {
        .cart {
            &__arrange {
                flex-direction: column-reverse;
                gap: 25px;
            }
        }
    }
`;
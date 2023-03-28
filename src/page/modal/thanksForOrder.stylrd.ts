import styled from 'styled-components';

export const ThanksForOrderStl = styled.div`
    background-color: var(--white);
    .modal {
        &__wrapper {
            display: flex;
            flex-direction: column;
            gap: 22px;
            align-items: center;
            justify-content: center;
            padding: 79px 70px 98px;
        }
        &__title {
            font-weight: 500;
            font-size: 40px;
            line-height: 120%;
            color: var(--black);
            text-transform: uppercase;
        }
        &__text {
            font-weight: 300;
            font-size: 20px;
            line-height: 120%;
            color: var(--dark);
        }
    }

`;
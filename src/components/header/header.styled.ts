import styled from 'styled-components';

export const HeaderStl = styled.header`
        position: sticky;
        top: 0px;
        z-index: 10000;
        background-color: var(--white);
    .header {
        &__top {
            position: relative;
            padding: 14px 0;
            display: flex;
            width: 100%;
            border-bottom: 1px solid var(--grey);
            &-left {
                display: flex;
                align-items: center;
                width: max-content;
                gap: 20px;
                margin-right: auto;
            }
        }
        &__wrapper {
            display: flex;
            align-items: center;
            gap: 18px;
            p {
                display: flex;
                flex-direction: column;
                font-weight: 600;
                font-size: 14px;
                line-height: 130.02%;
                color: var(--black);
                span {
                    font-weight: 300;
                    color: var(--dark);
                }
            }
        }
        &__bottom {
            padding: 24px 0;
            display: flex;
            border-bottom: 1px solid var(--grey);
        }
    }

    @media (max-width: 768px) {
        .header {
            &__top {
                &-left {
                    align-items: flex-start;
                    flex-direction: column;
                    margin-bottom: 20px;
                }
            }
            
        }
    }
    @media (max-width: 420px) {
        .header {
            &__bottom {
                padding: 5px 0;
            }
        }
    }
`;
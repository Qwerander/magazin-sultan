import styled from 'styled-components';

export const CatalogPageStl = styled.section`
    padding: 50px 0 100px;
    width: 100%;
    background-color: var(--white);
    .catalog {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 21px;
        width: 100%;
        &__list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 21px;    
            width: 100%;
            height: max-content;
        }
        &__top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            width: 100%;
        }
        &__title {
            font-weight: 500;
            font-size: 40px;
            line-height: 120%;
            text-transform: uppercase;
            color: var(--black);
        }
        &__pagination {
            grid-column: 2 / 3;
            display: flex;
            justify-content: center;
        }
        &__noProduct {
            font-weight: 500;
            font-size: 18px;
            line-height: 120%;
            text-transform: uppercase;
            color: var(--black);
        }
      
    }

    @media (max-width: 1080px) {
        .catalog {
            grid-template-columns: 1fr 2fr;
            &__list {
              grid-template-columns: 1fr 1fr;
            }
        }
    }
    @media (max-width: 850px) {
        .catalog {
            &__top {
                flex-direction: column;    
                align-items: flex-start;
                gap: 20px;
            }
        }
    }
    @media (max-width: 798px) {
        .catalog {
            grid-template-columns: 1fr;
            &__list {
                grid-template-columns: 1fr 1fr;
            }
            &__pagination {
                grid-column: auto;
        }
        }
    }
    @media (max-width: 525px) {
        .catalog {
            &__list {
                grid-template-columns: 1fr;
            }
            &__title {
                font-size: 20px;
            }
        }
    }

`;
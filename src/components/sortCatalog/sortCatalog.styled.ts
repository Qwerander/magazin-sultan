import styled from 'styled-components';

export const SortCatalogStl = styled.div`
    position: relative;
    padding: 5px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--black);
    span:last-child {
        cursor: pointer;
    }
    .sort {
        &__menu {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        &__dropdown {
            position: absolute;
            display: flex;
            flex-direction: column;
            top: 0;
            left: 0;
            gap: 5px;
            padding: 10px;
            border-radius: 10px;
            width: 120%;
            background-color: var(--white);
            box-shadow: var(--shadow);
            z-index: 10;
            transform: translate(-14%, 50px);
            span {
                cursor: pointer;
                &:hover {
                    background: var(--yellow-gradient);
                }
            }
        }
    }

    @media (max-width: 850px) {
        display: flex;
        gap: 5px;
        .sort {
            &__dropdown {
                width: 100%;
                transform: translate(0, 25px);
            }
        }
    }
    @media (max-width: 600px) {
        align-self: flex-start;
        margin-bottom: 20px;
    }
    
    @media (max-width: 420px) {
        flex-direction: column;
        gap: 0;
        .sort {
            &__dropdown {
                width: 100%;
                transform: translate(0, 50px);
            }
        }
    }
`;
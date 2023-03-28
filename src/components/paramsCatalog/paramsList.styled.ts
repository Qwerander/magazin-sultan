import styled from 'styled-components';

export const ParamsListStl = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    .params {
        &__title {
            margin-bottom: 10px;
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            color: var(--black);
        }
        &__list {
            display: flex;
            flex-direction: column;
            background-color: var(--white);
        }

        &__cost {
            display: flex;
            flex-direction: column;
            margin-bottom: 34px;
        }
        &__name {
            margin-bottom: 16px;
            font-weight: 300;
            font-size: 14px;
            line-height: 150%;
            color: var(--dark);
        }
        &__inputCost {
            padding: 4px 10px;
            border: none;
            width: 100px;
            border-radius: 100px;
            font-weight: 300;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            color: var(--dark);
            outline: none;
            background: var(--yellow-gradient);
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                -moz-appearance: textfield;
            }
        }
        &__costWrapper {
            display: flex;
            gap: 10px;
        }
        &__manufactur {
            display: flex;
            flex-direction: column;
            margin-bottom: 34px;
            border-bottom: 1px dashed var(--grey);
            padding-bottom: 10px;
        }
        &__manufacturTitle,
        &__filterTitle {
            margin-bottom: 15px;
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            color: var(--black);
        }
        &__manufacturList {
            display: flex;
            flex-direction: column;
            padding: 0;
            list-style: none;
            gap: 5px;
            margin: 15px 0;
        }
        &__item {
            display: none;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: var(--dark);
            label {
                display: flex;
                gap: 10px;
                cursor: pointer;
            }
        }
        &__item--active {
            display: block!important;
        }
        &__filtersList {
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 8px;
            li {
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: var(--dark);
                label {
                    display: flex;
                    gap: 10px;
                    cursor: pointer;
                }
            }
        }
        &__show {
            display: flex;
            align-items: center;
            gap: 5px;
        }

    }
    @media (max-width: 800px) {
        .params {
            &__list {
                position: absolute;
                padding: 10px 10px 20px;
                border-radius: 0 0 10px 10px;
                top: 30px;
                width: 100%;
                box-shadow: var(--shadow);
                z-index: 100;
            }
            &__title {
                cursor: pointer;
                span {
                    margin-left: 40px;
                    font-size: 0;
                    line-height: 0;
                    vertical-align: middle;
                    padding: 16px 10px 12px;
                    border-radius: 100%;
                    background: var(--yellow-gradient);
                }
            }
        }
    }

`;
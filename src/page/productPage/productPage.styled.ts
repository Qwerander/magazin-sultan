import styled from 'styled-components';

export const ProductPageStl = styled.section`
    padding: 45px 0 60px;
    .card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        &__left {
            text-align: center;
            img {
                height: 400px ;
            } 
        }
        &__right {
            padding-top: 35px;
            display: flex;
            flex-direction: column;
            
        }
        &__order {
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 75%;
        }

        &__inStock {
            margin-bottom: 10px;
            font-weight: 500;
            font-size: 14px;
            line-height: 130%;
            color: var(--green);
        }
        &__title {
            margin-bottom: 11px;
            font-weight: 800;
            font-size: 30px;
            line-height: 150%;
            color: var(--black);
        }
        &__volume {
            display: flex;
            gap: 5px;
            margin-bottom: 25px;
            font-weight: 400;
            font-size: 12px;
            line-height: 130%;
            color: var(--dark);
        }
        &__price {
            font-weight: 800;
            font-size: 30px;
            line-height: 130%;
            color: var(--black);
        }
        &__blocks {
            margin-bottom: 35px;
            display: flex;
            gap: 10px;
            justify-content: flex-start;
            align-items: center;
            div {
                border-radius: 10px;
                box-shadow: var(--shadow);
            }
        }
        &__share {
            padding: 28px; 
            border-radius: 10px;
            box-shadow: var(--shadow);
        }
        &__event {
            padding: 20px 35px;
            font-weight: 400;
            font-size: 12px;
            line-height: 150%;
            text-align: center;
            color: var(--dark);
        }
        &__priceList {
            display: flex;
            gap: 10px;
            align-items: center;
            padding: 30px 37px;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            color: var(--dark);
        }
        &__propertyList,
        &__specifications {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 30px;
        }
        &__property {
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            color: var(--black);
            span {
                font-weight: 300;
                color: var(--dark);
            }
        }
        &__open {
            display: flex;
            gap: 5px;
            align-items: center;
            margin-bottom: 15px;
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            color: var(--black);
        }
        &__description {
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 1px dashed var(--grey);
            font-weight: 300;
            font-size: 12px;
            line-height: 150%;
            color: var(--dark);
        }
        &__spec {
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            color: var(--black);
            span {
                font-weight: 300;
                color: var(--dark);
            }
 
        }
        &__back {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-left: 20px;
            gap: 5px;
            grid-column: 1 / 3;
        }
    }
    @media (max-width: 1200px) {
        .card {
            &__order {
                width: 100%;
            }
            &__blocks {
                flex-wrap: wrap;
            }
            &__event {
                order: 1;
            }
            &__priceList {
                order: 2;
            }
            &__share {
                order: 3;
            }
        }
    }

    @media (max-width: 950px) {
        .card {
            &__order {
                gap: 20px;
                flex-wrap: wrap;
                justify-content: flex-start;
            }
        }
    }
    @media (max-width: 600px) {
        .card {
            grid-template-columns: 1fr 3fr;
            &__left {
                img {
                    height: 200px ;
                } 
            }
        }
    }
    @media (max-width: 470px) {
        .card {
            grid-template-columns: 1fr;
            &__left {
                img {
                    height: 180px ;
                } 
            }
            &__order > button {
                padding: 21px 40px;
            }
            &__priceList {
                width: 100%;
                justify-content: center;
            }
            &__back {
                grid-column: 1 / 2; 
            }
        }
    }
    
    `;


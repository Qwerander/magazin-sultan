import styled from 'styled-components';

export const AdminPageStl = styled.section`
    padding: 30px 0;
    .admin__title {
        margin-bottom: 30px;
    }
    .product {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        gap: 10px;
        font-size: 10px;
        &__careType {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        div {
            display: flex;
            justify-content: center;
            padding: 5px 0;
            border-bottom: 1px dashed var(--grey);
        }
        button {
            align-self: center;
            justify-content: center;
            justify-self: center;
        }
        &__title {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            font-size: 10px;
            margin-bottom: 10px;
            padding-bottom: 5px;
            border-bottom: 1px solid var(--grey);
            span {
                display: flex;
                justify-content: flex-start;
            }
        }
        &__wrapper {
            gap: 5px
        }

    }
    .modal__productForm {
        padding: 30px 70px;
        background-color: var(--white);
        
    }
`;
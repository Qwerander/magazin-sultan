import styled from 'styled-components';

export const ProductFormStl = styled.div`   
    margin-bottom: 40px;
    .form {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        &__label {
            display: flex;
            align-items: center;
            width: 48%;
            input[type=text] {
                padding: 5px 10px;
                background-color: var(--grey);
                border: none;
                border-radius: 36px;
                width: 100%;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: var(--black);
                outline: none;
                &::placeholder {
                    color: var(--text-grey)
                }
            }
            &--static {
                width: 100%;
                input {
                    display: none;
                } 
            }
            &--care {
                width: max-content;
            }
        }
        &__volume {
            display: flex;
        }
        &__care {
            display: flex;
            gap: 12px;
            align-items: center;
        }
    }
`;
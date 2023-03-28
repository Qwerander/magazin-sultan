import styled from 'styled-components';

export const FooterStl = styled.footer`
    padding: 71px 0 116px 0;
    line-height: 150%;
    color: var(--white);
    background-color: var(--dark);
    .footer {
        &__wrapper {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
            width: 100%;      
        }
    }
    
    @media (max-width: 1150px) {
        .footer {
            &__wrapper {
                
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
    @media (max-width: 668px) {
        padding: 16px 0;
        .footer {
            &__wrapper {
                grid-template-columns: repeat(2, 1fr);
            }
            
        }
    }
`;
import styled from 'styled-components';

export const BreadCrumbsStl = styled.div`
    display: flex;
    margin-bottom: 50px;
    span {
        padding: 0 10px;
        font-weight: 300;
        font-size: 14px;
        line-height: 120%;
        color: var(--dark);
    }
    span:not(:last-child) {
        border-right: 1px dotted var(--dark);
    }
    span:last-child {
        opacity: 0.5;
    }
`;

import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonStlType = {
    text: string
    children?: ReactNode
    padding?: string
    bgColor?: string
    color?: string
    radius?: string
    weight?: string
    size?: string
    line?: string
    border?: string
    disabled?: boolean
    self?: string
    zIndex?: string
    handleClick?: () => void
    type?: 'button' | 'submit'
}

const ButtonStl = styled.button<ButtonStlType>`
    display: flex;
    gap: 12px;
    align-items: center;
    padding: ${props => props.padding || '21px 54px'};
    background: ${props => props.bgColor || 'var(--yellow)'};
    color: ${props => props.color || 'var(--white)'};
    border-radius: ${props => props.radius || '79px'};
    font-weight: ${props => props.weight || '700'};
    font-size: ${props => props.size || '14px'};
    line-height:  ${props => props.line || '17px'};
    border: ${props => props.border || 'none'};
    align-self: ${props => props.self || null};
    z-index: ${props => props.zIndex || null};
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
        background: var(--orange);
    }
`;

export const Button = ({ ...props }: ButtonStlType) => {
    return (
        <ButtonStl
            {...props}
            onClick={props.handleClick}
        >
            {props.text}
            {props.children}
        </ButtonStl>
    );
}; 
import { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchSVG } from '../assets/icons/search.svg';
import { ReactComponent as SubscribeSVG } from '../assets/icons/subscribe.svg';

type FormStlType = {
    width?: string
    padding?: string
    bgColor?: string
    color?: string
    radius?: string
    weight?: string
    size?: string
    border?: string
    subscribe?: boolean
    placeholder?: string
    formSubmit?: (value: string) => void
    value?: string
    setValue?: (value: string) => void

}

const FormStl = styled.form<FormStlType>`
    width: ${props => props.width || '238px'};
    .label {
        position: relative;
        width: 100%;
        svg {
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;
        }
    }
    .input {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px;
        gap: 10px;
        width: 100%;
        background-color: ${props => props.bgColor || 'var(--grey)'};
        border: none;
        border-radius: 36px;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: var(--black);
        outline: none;
        &::placeholder {
            color: var(--text-grey)
        }
    }
`;

export const SearchForm = ({ ...props }: FormStlType) => {


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (props.setValue) {
            props.setValue(event.target.value);
        }
        
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (props.formSubmit && props.value && props.setValue) {
            props.formSubmit(props.value);
            props.setValue('');
        }
    }

    return (
        <FormStl {...props} onSubmit={handleSubmit}>
            <label className='label'>
                <input
                    onChange={handleChange}
                    value={props.value}
                    placeholder={props.placeholder || 'Поиск...'}
                    className='input'
                    type="text"
                />
                {props.subscribe
                    ? <SubscribeSVG onClick={handleSubmit} />
                    : <SearchSVG onClick={handleSubmit} />
                }
            </label>
        </FormStl>
    );
}; 
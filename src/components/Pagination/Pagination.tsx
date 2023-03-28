import styled from 'styled-components';
import { Button } from '../../ui/Button';
import { ReactComponent as ArrowLeftSVG } from "../../assets/icons/arrowLeft.svg";
import { ReactComponent as ArrowRightSVG } from "../../assets/icons/arrowRight.svg";

const PaginateStl = styled.div`
    display: flex;
    gap: 35px;
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        list-style-type: none;
        width: auto;
        align-items: center;
        li {
            width: auto;
            display: block;
        }
    }
`;

type PaginationType = {
    pageArray: Array<number>
    activeButton: number
    changeActiveButton: (item: number) => void
}

export const Pagination = ({
    pageArray,
    activeButton,
    changeActiveButton
}: PaginationType) => {
    const max = pageArray.length;

    return (
        <PaginateStl >
            <Button
                text=''
                padding='0'
                bgColor='none'
                handleClick={() => changeActiveButton(activeButton > 1 ? activeButton - 1 : 1)}
            >
                <ArrowLeftSVG />
            </Button>
            <ul>
                {pageArray.map((item) => (
                    <li key={item}>
                        <Button
                            text={`${item}`}
                            padding='8.5px 14px'
                            color='var(--dark)'
                            handleClick={() => changeActiveButton(item)}
                            bgColor={item === activeButton ? 'var(--yellow-gradient)' : 'none'}
                        />
                    </li>
                ))}
            </ul>
            <Button
                text=''
                padding='0'
                bgColor='none'
                handleClick={() => changeActiveButton(activeButton < max ? activeButton + 1 : max)}
            >
                <ArrowRightSVG />
            </Button>
        </PaginateStl>
    );
};

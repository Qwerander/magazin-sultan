import { Button } from "../../ui/Button"
import styled from 'styled-components';
import { useAppDispatch } from "../../store/hooks";
import { decrementProductCount, incrementProductCount } from "../../store/reducers/cartSlice";


const CounterStl = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
    .count {
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
        color: var(--dark);
    }
 
`;

type CounterType = {
    count: number
    id: string
    setCount?: (count: number) => void
}

export const Counter = ({ count, id, setCount }: CounterType) => {
    const dispatch = useAppDispatch();

    const decrementCount = () => {
        if (!setCount) {
            dispatch(decrementProductCount({id}));
        } else {
            if (count > 1) setCount(count - 1);
        }
    }
    
    const incrementCount = () => {
        if (!setCount) {
            dispatch(incrementProductCount({id}));
        } else {
            setCount(count + 1);
        }

    }

    return (
        <CounterStl>
            <Button
                disabled={count === 1}
                text="-"
                padding="4px 16px"
                bgColor="var(--yellow-gradient)"
                color="var(--black)"
                handleClick={decrementCount}
                />
            <span className="count">
                {count}
            </span>
            <Button
                text="+"
                padding="4px 14px"
                bgColor="var(--yellow-gradient)"
                color="var(--black)"
                handleClick={incrementCount}
            />
        </CounterStl>
    )
}
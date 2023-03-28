import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setMaxCost, setMinCost } from "../../../store/reducers/filtersSlice";

export const CostParams = () => {
    const dispatch = useAppDispatch();
    const minCost = useAppSelector(state => state.filters.minCost);
    const maxCost = useAppSelector(state => state.filters.maxCost);

    const handleChangeMinCost = (event: ChangeEvent<HTMLInputElement>) => {
        let value = +event.currentTarget.value;
        if (value < 0) {
            value = 0;
        } 
        dispatch(setMinCost({minCost: value}));
    }
    
    const handleChangeMaxCost = (event: ChangeEvent<HTMLInputElement>) => {
          let value = +event.currentTarget.value;
        if (value < 0) {
            value = 0;
        } 
        dispatch(setMaxCost({maxCost: value}));
    }

    return (
        <div className="params__cost">
            <span className="params__name">
                Цена ₸
            </span>
            <div className="params__costWrapper">
                <input
                    value={minCost}
                    onChange={handleChangeMinCost}
                    className="params__inputCost"
                    type="number"
                />
                -
                <input
                    value={maxCost}
                    onChange={handleChangeMaxCost}
                    className="params__inputCost"
                    type="number"
                />
            </div>
        </div>
    );
};
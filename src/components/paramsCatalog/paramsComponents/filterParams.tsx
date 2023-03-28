import { ChangeEvent } from "react";
import { careArray } from "../../../helpers/typeCare";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addTypeCare, removeTypeCare } from "../../../store/reducers/filtersSlice";

export const FilterParams = () => {
    const careType = useAppSelector(state => state.filters.typeCare);

    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const label = e.target.ariaLabel!;

        if (e.target.checked) {
            dispatch(addTypeCare({ typeCare: label }));
        } else {
            dispatch(removeTypeCare({ typeCare: label }));
        }
    }

    return (
        <div className="params__filters">
            <h3 className="params__filterTitle">
                Типы уходы
            </h3>
            <ul className="params__filtersList">
                {careArray.map(care => (
                    <li key={care.typeCare}>
                        <label>
                            <input
                                checked={careType.includes(care.typeCare)}
                                aria-label={care.typeCare}
                                onChange={handleChange}
                                type="checkbox"
                            />
                            <span>Уход {care.title}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );

}


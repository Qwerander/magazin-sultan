import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { SearchForm } from "../../../ui/SearchForm";
import { Button } from "../../../ui/Button";
import { setFilterManufacture } from "../../../store/reducers/filtersSlice";
import { calculateProducts } from "../../../helpers/calculateProducts";
import { ReactComponent as DropDownSVG } from "../../../assets/icons/arrowDropdown.svg";

export const ManufacturParams = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products.products)
    const manufactures = useAppSelector(state => state.products.manufactur);
    const [manufacturesFilter, setManufacturesFilter] = useState(manufactures);
    const [value, setValue] = useState('');
    const [checkeds, setCheckeds] = useState<Array<string>>([]);
    const [showAll, setShowAll] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const label = e.target.ariaLabel!;

        if (e.target.checked) {
            setCheckeds((prev) => [...prev, label]);
        } else {
            setCheckeds((prev) => prev.filter((item) => item !== label));
        }
    };

    useEffect(() => {
        if (value !== '') {
            setManufacturesFilter(
                manufactures.filter(item =>
                    item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                )
            )
        } else {
            setManufacturesFilter(manufactures);
        }
    }, [value, manufactures]);

    useEffect(() => {
        dispatch(setFilterManufacture(checkeds));
    }, [checkeds, dispatch]);

    return (
        <div className="params__manufactur">
            <h3 className="params__manufacturTitle">
                Производитель
            </h3>
            <SearchForm setValue={setValue} value={value} />
            <ul className="params__manufacturList">
                {manufacturesFilter.map((manufactur, index, arr) => (
                    <li
                        style={{ display: index < 4 ? 'block' : 'none' }}
                        key={index}
                        className={!showAll ? 'params__item' : 'params__item params__item--active'}
                    >
                        <label>
                            <input
                                aria-label={manufactur}
                                onChange={handleChange}
                                type="checkbox"
                            />
                            <span>
                                {manufactur} ({calculateProducts(products, manufactur)})
                            </span>
                        </label>
                    </li>
                ))}
            </ul>
            {manufacturesFilter.length > 4 &&
                <Button
                    text="Показать все"
                    bgColor="none"
                    padding="2px 6px"
                    color="var(--dark)"
                    size="12px"
                    line="150%"
                    weight="500"
                    self="flex-start"
                    handleClick={() => setShowAll(prev => !prev)}
                >
                    <span
                        style={showAll ?
                            { transform: 'rotate(180deg)' } : {}}
                    >
                        <DropDownSVG />
                    </span>
                </Button>
            }
        </div>
    );
}

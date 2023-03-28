import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { changeSortType } from "../../store/reducers/filtersSlice";
import { SortCatalogStl } from "./sortCatalog.styled";
import { ReactComponent as DropDownSVG } from "../../assets/icons/arrowDropdown.svg";

export const sortVariant = [
    { id: 1, title: 'По убыванию названию' },
    { id: 2, title: 'По возрастанию названию' },
    { id: 3, title: 'По убыванию цены' },
    { id: 4, title: 'По возрастанию цены' },
]

type SortVariantType = typeof sortVariant[0];

export const SortCatalog = () => {

    const [isSortOpen, toggleIsSortOpen] = useState(false);
    const [sortType, setSortType] = useState(sortVariant[0]);
    const dispatch = useAppDispatch();

    const handleClick = (item: SortVariantType) => {
        dispatch(changeSortType({ sortType: item.id }));
        setSortType(item);
        toggleIsSortOpen(false);
    }

    return (
        <SortCatalogStl>
            <span>Сортировка: </span>
            <span
                className="sort__menu"
                onClick={() => toggleIsSortOpen(!isSortOpen)}
            >
                {sortType.title}
                <span
                    style={isSortOpen ?
                        { transform: 'rotate(180deg)' } : {}}
                >
                    <DropDownSVG />
                </span>
            </span>
            {isSortOpen &&
                <div className="sort__dropdown" onMouseLeave={() => toggleIsSortOpen(false)}>
                    {sortVariant.map(item => {
                        return (
                            <span
                                key={item.id}
                                onClick={() => handleClick(item)}
                            >
                                {item.title}
                            </span>
                        )
                    })}
                </div>
            }
        </SortCatalogStl>
    );
};


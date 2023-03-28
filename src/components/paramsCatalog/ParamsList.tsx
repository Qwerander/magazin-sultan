import { useResize } from "../../hooks/useResize";
import { CostParams } from "./paramsComponents/CostParams";
import { ManufacturParams } from "./paramsComponents/ManufacturParams";
import { FilterParams } from "./paramsComponents/filterParams";
import { ParamsListStl } from "./paramsList.styled";
import { ReactComponent as ArrowUpSVG } from "../../assets/icons/arrowParamsUp.svg";
import { ReactComponent as ArrowDownSVG } from "../../assets/icons/arrowParamsDown.svg";
import { useEffect, useState } from "react";

export const ParamsList = () => {
    const [resize800] = useResize(800);
    const [isShowParams, toggleIsShowParams] = useState(true);
    const handleClick = () => {
        if (!resize800) {
            toggleIsShowParams(prev => !prev);
        }
    }

    useEffect(() => {
        if (!resize800) {
            toggleIsShowParams(false);
        } else {
            toggleIsShowParams(true);
        }
    }, [resize800]);

    return (
        <ParamsListStl>
            <h2 className="params__title" onClick={handleClick}>
                ПОДБОР ПО ПАРАМЕТРАМ
                <span>
                    {!resize800 &&
                        <>
                            {!isShowParams
                                ? <ArrowDownSVG />
                                : <ArrowUpSVG />
                            }
                        </>
                    }
                </span>
            </h2>
            {isShowParams &&
                <div className="params__list" onMouseLeave={() => handleClick()}>
                    <CostParams />
                    <ManufacturParams />
                    <FilterParams />
                </div>
            }
        </ParamsListStl>
    );
};
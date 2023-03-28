import styled from 'styled-components';
import { Filter } from './Filter';
import { careArray } from '../../helpers/typeCare';

export const FilterCatalogStl = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 30px;
    gap: 10px;
    
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;


export const FiltersCatalog = () => {
    return (
        <FilterCatalogStl>
            {careArray.map(care => (
                <Filter
                    key={care.typeCare}
                    text={care.title}
                    typeCare={care.typeCare}
                />
            ))}

        </FilterCatalogStl>
    );
};
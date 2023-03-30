import styled from 'styled-components';
import { Filter } from './Filter';
import { useAppSelector } from '../../store/hooks';

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
    const careTypes = useAppSelector(state => state.products.type_care);
    
    return (
        <FilterCatalogStl>
            {careTypes.map(care => (
                <Filter
                    key={care}
                    text={care}
                    typeCare={care}
                />
            ))}

        </FilterCatalogStl>
    );
};

import Container from '../../helperComponentsStyled/Conteiner';
import { CatalogPageStl } from './catalogPage.styled';
import { CardCatalog } from '../../components/cardCatalog/CardCatalog';
import { SortCatalog } from '../../components/sortCatalog/SortCatalog';
import { FiltersCatalog } from '../../components/filtersCatalog/FiltersCatalog';
import { ParamsList } from '../../components/paramsCatalog/ParamsList';
import { useResize } from '../../hooks/useResize';
import { useAppSelector } from '../../store/hooks';
import { Pagination } from '../../components/Pagination/Pagination';
import { numberToArray } from '../../helpers/createArray';
import { useEffect, useState } from 'react';
import { BreadCrumbs } from '../../components/breadCrumbs/BreadCrumbs';

export const CatalogPage = () => {
    const [resize800] = useResize(800);
    const [resize600] = useResize(600);
    const [resiz1080] = useResize(1080);
    const products = useAppSelector(state => state.products.products);
    const manufactur = useAppSelector(state => state.filters.manufactur);
    const typeCare = useAppSelector(state => state.filters.typeCare);
    const minCost = useAppSelector(state => state.filters.minCost);
    const maxCost = useAppSelector(state => state.filters.maxCost);
    const sortType = useAppSelector(state => state.filters.sortType);

    const [filteredSortedProducts, setFiltredSortedProducts] = useState(products);
    const [onPage, setOnPage] = useState(resiz1080 ? 9 : 6);

    const pages = Math.ceil(filteredSortedProducts.length / onPage);
    const pageArray = numberToArray(pages);

    const [page, setPage] = useState(1);
    const [productsOnPage, setProductsOnPage] =
        useState(filteredSortedProducts.slice(0, onPage * page));

    useEffect(() => {
        const filteredProducts = products
            .filter(product => product.price! >= minCost && product.price! <= maxCost)
            .filter(product => manufactur.length === 0 || manufactur.includes(product.manufactur!))
            .filter(product => typeCare.length === 0 || product.type_care?.some(value => typeCare.includes(value)));

        switch (sortType) {
            case 1:
                filteredProducts.sort((a, b) => (a.title! < b.title! ? 1 : -1));
                setFiltredSortedProducts(filteredProducts);
                break;
            case 2:
                filteredProducts.sort((a, b) => (a.title! > b.title! ? 1 : -1));
                setFiltredSortedProducts(filteredProducts);
                break;
            case 3:
                filteredProducts.sort((a, b) => (a.price! < b.price! ? 1 : -1));
                setFiltredSortedProducts(filteredProducts);
                break;
            case 4:
                filteredProducts.sort((a, b) => (a.price! > b.price! ? 1 : -1));
                setFiltredSortedProducts(filteredProducts);
                break;
            default:
                setFiltredSortedProducts(filteredProducts);
                break;
        }
        setPage(1);
    }, [manufactur, minCost, maxCost, typeCare, products, sortType]);

    useEffect(() => {
        setProductsOnPage(filteredSortedProducts.slice(onPage * (page - 1), onPage * page))
    }, [page, filteredSortedProducts, onPage]);

    useEffect(() => {
        setOnPage(resiz1080 ? 9 : 6);
    }, [resiz1080]);

    return (
        <CatalogPageStl>
            {resize600 && <BreadCrumbs />}
            <Container columns>
                <div className="catalog__top">
                    <h1 className='catalog__title'>
                        Косметика и гигиена
                    </h1>
                    {resize600 && <SortCatalog />}
                    {!resize800 && <ParamsList />}

                </div>
                <FiltersCatalog />
                {!resize600 && <SortCatalog />}
                <div className='catalog'>
                    {resize800 && <ParamsList />}

                    <div className='catalog__list'>
                        {productsOnPage.map(product => {
                            return <CardCatalog
                                key={product.id}
                                product={product}
                            />
                        })}
                        {productsOnPage.length === 0 &&
                            <h2 className='catalog__noProduct'>
                                Товаров не найдено
                            </h2>
                        }
                    </div>
                    <div className='catalog__pagination'>
                        {pages > 1 &&
                            <Pagination
                                pageArray={pageArray}
                                activeButton={page}
                                changeActiveButton={setPage}
                            />
                        }
                    </div>
                </div>
            </Container>
        </CatalogPageStl>
    );
};


import { NavLink, useLocation, useParams } from "react-router-dom";
import { BreadCrumbsStl } from "./breadCrumbs.styled";
import { useAppSelector } from "../../store/hooks";
import Container from "../../helperComponentsStyled/Conteiner";

export const BreadCrumbs = () => {
    const location = useLocation();
    const params = useParams();
    const [product] = useAppSelector(state => 
        state.products.products.filter(product => product.id === params.id));

    const routesWithNames = () => {
        if (location.pathname === '/catalog') {
            return <span>Каталог</span>;
        } else if (location.pathname === '/cart') {
            return <span>Корзина</span>;
        } else if (location.pathname.includes('/product')) {
            return (
                <>
                    <span>
                        <NavLink to={'/catalog'}>
                            Каталог
                        </NavLink>
                    </span>
                    <span>
                        {product.title}
                    </span>
                </>
            );
        }
    }


    return (
        <BreadCrumbsStl>
            <Container justContent="flex-start">
                <span>Главная</span>
                {routesWithNames()}
            </Container>
        </BreadCrumbsStl>
    );
};
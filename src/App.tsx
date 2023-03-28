import { useEffect } from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CartPage } from './page/cartPage/CartPage';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getProducts } from './store/reducers/productsSlice';
import products from './products/products.json'
import { ProductPage } from './page/productPage/ProductPage';
import { CatalogPage } from './page/catalogPage/CatalogPage';
import { AdminPage } from './page/adminPage/AdminPage';

function App() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const productsInState = useAppSelector(state => state.products.products);

	useEffect(() => {
		if (productsInState.length === 0) {
			dispatch(getProducts(products));		
		}
	}, [dispatch, productsInState]);

	useEffect(() => {
		if (location.pathname === '/') {
			navigate('/catalog');
		}
	}, [navigate, location]);

	return (
		<>
			{location.pathname !== '/admin' && <Header />}
			<Routes>
				<Route path="catalog" element={<CatalogPage />} />
				<Route path="admin" element={<AdminPage />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="product/:id" element={<ProductPage />} />
				<Route path="*" element={<div>Страница не найдена</div>} />
			</Routes>
			{location.pathname !== '/admin' && <Footer />}
		</>
	);
}

export default App;

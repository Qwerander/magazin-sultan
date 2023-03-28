import { CardCart } from '../../components/cardCart/CardCart';
import Container from '../../helperComponentsStyled/Conteiner';
import { Button } from '../../ui/Button';
import { CartPageStl } from './cartPage.styled';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearCart } from '../../store/reducers/cartSlice';
import { Modal } from '../../helperComponentsStyled/Modal';
import { useState } from 'react';
import { ThanksForOrder } from '../modal/ThanksForOrder';
import { BreadCrumbs } from '../../components/breadCrumbs/BreadCrumbs';
import { calculateAmount } from '../../helpers/calculateAmount';
import { useResize } from '../../hooks/useResize';
import { useNavigate } from 'react-router-dom';

export const CartPage = () => {
    const [resize600] = useResize(600);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [showPopUp, setShowPopUp] = useState(false);
    const cart = useAppSelector(state => state.cart.products);

    const total = calculateAmount(cart);

    const handleClick = () => {
        dispatch(clearCart());
        setShowPopUp(true);
    }

    return (
        <CartPageStl>
            {resize600 && <BreadCrumbs />}
            <Container>
                <div className="cart__wrapper">
                    {!resize600 &&
                        <div className='cart__back'>
                            <Button
                                text='<'
                                handleClick={() => navigate('/catalog')}
                                padding='8px 12px'
                                bgColor="var(--yellow-gradient)"
                                color="var(--black)"
                                self='flex-start'
                            />
                            назад
                        </div>
                    }
                    <h1 className='cart__title'>
                        Корзина
                    </h1>
                    {total === 0 &&
                        <div>
                            <h2 className='cart__title'>
                                Ваша корзина пуста
                            </h2>
                        </div>
                    }
                    <div className="cart__list">
                        {cart.map(product => (
                            <CardCart
                                key={product.product.id}
                                product={product.product}
                                count={product.count}
                            />
                        ))}
                    </div>
                    <div className="cart__arrange">
                        <Button
                            text='Оформить заказ'
                            handleClick={handleClick}
                            disabled={cart.length === 0}
                        />
                        <span className='cart__amount'>
                            {total} ₸
                        </span>
                    </div>
                </div>
            </Container>
            {showPopUp &&
                <Modal toggle={setShowPopUp}>
                    <ThanksForOrder />
                </Modal>
            }
        </CartPageStl>
    );
};
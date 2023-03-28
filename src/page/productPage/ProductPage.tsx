import Container from '../../helperComponentsStyled/Conteiner';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../../ui/Button';
import { ProductPageStl } from './productPage.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as CartSVG } from "../../assets/icons/buttonCart.svg";
import { ReactComponent as ShareSVG } from "../../assets/icons/share.svg";
import { ReactComponent as DownloadSVG } from "../../assets/icons/downloadBlack.svg";
import { ReactComponent as DropDownSVG } from "../../assets/icons/arrowDropdown.svg";
import { ReactComponent as VolumeMlSVG } from "../../assets/icons/volumeML.svg";
import { ReactComponent as VolumeGSVG } from "../../assets/icons/volumeG.svg";
import { useState } from 'react';
import { Counter } from '../../components/counter/Counter';
import { addProduct } from '../../store/reducers/cartSlice';
import { BreadCrumbs } from '../../components/breadCrumbs/BreadCrumbs';
import { useResize } from '../../hooks/useResize';

export const ProductPage = () => {
    const [resize600] = useResize(600);
    const navigate = useNavigate()
    const params = useParams();
    const dispatch = useAppDispatch()
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
    const [isSpecificationsOpen, setIsSpecificationsOpen] = useState(false)
    const [count, setCount] = useState(1)
    const [product] = useAppSelector(
        state => state.products.products.filter(product => product.id === params.id)
    );

    const handleClick = () => {
        dispatch(addProduct({ product, count }))
    }

    return (
        <ProductPageStl>
            {resize600 && <BreadCrumbs />}
            <Container>
                <div className="card">
                    {!resize600 &&
                        <div className='card__back'>
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
                    <div className="card__left">
                        <img src={product.url} alt={product.title} />
                    </div>
                    <div className="card__right">
                        <span className='card__inStock'>В наличии</span>
                        <h1 className='card__title'>
                            {product.title}
                        </h1>
                        <span className='card__volume'>
                            {product.type_volume === 'Вес'
                                ? <VolumeGSVG />
                                : <VolumeMlSVG />
                            }
                            {product.volume}
                        </span>
                        <div className='card__order'>
                            <span className='card__price'>
                                {product.price} ₸
                            </span>
                            <Counter
                                count={count}
                                id={product.id!}
                                setCount={setCount}
                            />
                            <Button
                                text='В корзину'
                                handleClick={handleClick}
                            >
                                <CartSVG />
                            </Button>
                            {!resize600 &&
                                <div className='card__share'>
                                    <ShareSVG />
                                </div>
                            }
                        </div>
                        <div className='card__blocks'>
                            {resize600 &&
                                <div className='card__share'>
                                    <ShareSVG />
                                </div>
                            }
                            <div className='card__event'>
                                При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области
                            </div>
                            <div className='card__priceList'>
                                Прайс&nbsp;-&nbsp;лист
                                <DownloadSVG />
                            </div>
                        </div>
                        <div className='card__propertyList'>
                            <span className='card__property'>
                                <span>Производитель: </span>
                                {product.manufactur}
                            </span>
                            <span className='card__property'>
                                <span>Бренд: </span>
                                {product.brand}
                            </span>
                            <span className='card__property'>
                                <span>Артикул: </span>
                                {product.barcode?.slice(0, 6)}
                            </span>
                            <span className='card__property'>
                                <span>Штрихкод: </span>
                                {product.barcode}
                            </span>
                        </div>
                        <div
                            className='card__open'
                            onClick={() => setIsDescriptionOpen(prev => !prev)}
                        >
                            Описание
                            <span
                                style={isDescriptionOpen ?
                                    { transform: 'rotate(180deg)' } : {}}
                            >
                                <DropDownSVG />
                            </span>
                        </div>
                        {isDescriptionOpen &&
                            <div className='card__description'>
                                {product.description}
                            </div>
                        }
                        <div
                            className='card__open'
                            onClick={() => setIsSpecificationsOpen(prev => !prev)}
                        >
                            Характеристики
                            <span
                                style={isSpecificationsOpen ?
                                    { transform: 'rotate(180deg)' } : {}}
                            >
                                <DropDownSVG />
                            </span>
                        </div>
                        {isSpecificationsOpen &&
                            <div className='card__specifications'>
                                <span className='card__spec'>
                                    <span>Назначение: </span>
                                    {product.manufactur}
                                </span>
                                <span className='card__spec'>
                                    <span>Тип: </span>
                                    {product.manufactur}
                                </span>
                                <span className='card__spec'>
                                    <span>Производитель: </span>
                                    {product.manufactur}
                                </span>
                                <span className='card__spec'>
                                    <span>Бренд: </span>
                                    {product.brand}
                                </span>
                                <span className='card__spec'>
                                    <span>Штрихкод: </span>
                                    {product.barcode}
                                </span>
                                <span className='card__spec'>
                                    <span>Артикуль: </span>
                                    {product.barcode?.slice(0, 6)}
                                </span>
                                <span className='card__spec'>
                                    <span>Вес/Объём: </span>
                                    {product.volume}
                                </span>
                                <span className='card__spec'>
                                    <span>Кол-во в коробке: </span>
                                    {product.volume}
                                </span>
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </ProductPageStl>
    );
};
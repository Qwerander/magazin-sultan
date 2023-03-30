import Container from '../../helperComponentsStyled/Conteiner';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ProductType, deleteAllProducts, deleteProduct } from '../../store/reducers/productsSlice';
import { AdminPageStl } from './adminPage.styled';
import { ProductForm } from '../../components/adminComponents/productForm/ProductForm';
import { Button } from '../../ui/Button';
import { ReactComponent as DeleteSvg } from '../../assets/icons/delete.svg';
import { ReactComponent as EditSvg } from '../../assets/icons/edit.svg';
import { useState } from 'react';
import { Modal } from '../../helperComponentsStyled/Modal';
import { useNavigate } from 'react-router-dom';
import { ChangeTypeCare } from '../../components/adminComponents/changeTypeCare/ChangeTypeCare';

export const AdminPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const careTypes = useAppSelector(state => state.products.type_care);
    const [productValues, setProductValues] = useState<ProductType>({
        id: '',
        url: '',
        title: '',
        type_volume: '',
        volume: '',
        barcode: '',
        manufactur: '',
        brand: '',
        type_care: [...careTypes.map(care => care)],
        description: '',
        price: 0,
    });

    const handleClick = (product: ProductType) => {
        setProductValues({ ...product });
        setIsModalOpen(true);
    }

    const products = useAppSelector(state => state.products.products);

    return (
        <AdminPageStl>
               <Button 
                    text='В каталог'
                    handleClick={() => {navigate('/')}}
                    position
                    padding='0'
                    bgColor='none'
                    color='var(--dark)'
                />
            <Container columns>
                <h1 className='admin__title'>Админка</h1>
                <div className='admin'>
                    <ProductForm  />
                    <div className='product__title'>
                        <span>Штрихкод</span>
                        <span>Бренд</span>
                        <span>Производитель</span>
                        <span>Название</span>
                        <span>Ед. измерения</span>
                        <span>Вес / Объем</span>
                        <span>Типы ухода</span>
                        <span>Цена</span>
                        <span>Url картинки</span>
                        <span></span>
                    </div>
                    {products?.map((product: ProductType) => (
                        <div key={product.id} className='product'>
                            <div>{product.barcode}</div>
                            <div>{product.brand}</div>
                            <div>{product.manufactur}</div>
                            <div>{product.title}</div>
                            <div>{product.type_volume}</div>
                            <div>{product.volume}</div>
                            <div className='product__careType'>
                                {product.type_care?.map(care => (
                                    <span key={care}>{care}</span>
                                ))}</div>
                            <div>{product.price}</div>
                            <div>{product.url}</div>
                            <div className='product__wrapper'>
                                <Button
                                    text=''
                                    padding='6px'
                                    handleClick={() => { handleClick(product) }}
                                >
                                    <EditSvg />
                                </Button>
                                <Button
                                    text=''
                                    padding='4px'
                                    handleClick={() => dispatch(deleteProduct({ id: product.id! }))}
                                >
                                    <DeleteSvg />
                                </Button>
                            </div>
                        </div>
                    ))}
                    <Button
                        text='Удалить все'
                        padding='10px 30px'
                        handleClick={() => dispatch(deleteAllProducts())}
                    />
                </div>
                <ChangeTypeCare />
            </Container>
            {isModalOpen &&
                <Modal toggle={setIsModalOpen}>
                    <div className='modal__productForm'>
                        <ProductForm
                            product={productValues}
                            textButton='Изменить'
                            setIsModalOpen={setIsModalOpen}
                        />
                    </div>
                </Modal>
            }
        </AdminPageStl >
    );
};
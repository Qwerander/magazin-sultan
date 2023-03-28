import { CardStl } from "./card.styled";
import { ReactComponent as CartSVG } from "../../assets/icons/buttonCart.svg";
import { ReactComponent as VolumeMlSVG } from "../../assets/icons/volumeML.svg";
import { ReactComponent as VolumeGSVG } from "../../assets/icons/volumeG.svg";
import { Button } from "../../ui/Button";
import { ProductType } from "../../store/reducers/productsSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { addProduct } from "../../store/reducers/cartSlice";

export type CardType = {
    product: ProductType
    count?: number
}

export const CardCatalog = ({ product }: CardType) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleClick = () => {

        dispatch(addProduct({ product }));
    }

    return (
        <CardStl>
            <div className="card__img">
                <img src={product.url} alt={product.title} />
            </div>
            <div className="card__content">
                <span className="card__volume">
                    {product.type_volume === 'Вес'
                        ? <VolumeGSVG />
                        : <VolumeMlSVG />
                    }
                    {product.volume}
                </span>
                <h2 className="card__title" onClick={() => navigate(`/product/${product.id}`)}>
                    {product.title}
                </h2>
                <span className="card__specifications">
                    <span>Штрихкод: </span>
                    {product.barcode}
                </span>
                <span className="card__specifications">
                    <span>Производитель: </span>
                    {product.manufactur}
                </span>
                <span className="card__specifications">
                    <span>Бренд: </span>
                    {product.brand}
                </span>
                <span className="card__specifications">
                    <div className="card__care">
                        <span>Тип ухода: </span>
                        <div>
                            {product.type_care?.map(type => (
                                <p key={type}>{type}</p>
                            ))}
                        </div>
                    </div>
                </span>
            </div>
            <div className="card__bottom">
                <span className="card__amount">
                    {product.price} ₸
                </span>
                <Button
                    text="в&nbsp;корзину"
                    padding="16px 25px"
                    size="10px"
                    handleClick={handleClick}
                >
                    <CartSVG />
                </Button>
            </div>
        </CardStl>
    );
};
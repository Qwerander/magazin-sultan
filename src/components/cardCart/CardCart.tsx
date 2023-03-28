import { CardStl } from "./card.styled";
import { ReactComponent as DeleteSVG } from "../../assets/icons/delete.svg";
import { ReactComponent as VolumeMlSVG } from "../../assets/icons/volumeML.svg";
import { ReactComponent as VolumeGSVG } from "../../assets/icons/volumeG.svg";
import { Button } from "../../ui/Button";
import { Counter } from "../counter/Counter";
import { CardType } from "../cardCatalog/CardCatalog";
import { useAppDispatch } from "../../store/hooks";
import { deleteProduct } from "../../store/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

export const CardCart = ({ product, count }: CardType) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(deleteProduct({ id: product.id! }));
    }

    return (
        <CardStl>
            <div className="card__top">
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
                    <h2
                        className="card__title"
                        onClick={() => navigate(`/product/${product.id}`)}
                    >
                        {product.title}
                    </h2>
                    <p className="card__descr">
                        {product.description}
                    </p>
                </div>
            </div>
            <div className="card__bottom">
                <Counter count={count!} id={product.id!} />
                <div className="card__amount">
                    {product.price! * count!} ₸
                </div>
                <Button
                    text=""
                    padding="20px"
                    radius="100%"
                    handleClick={handleClick}
                >
                    <DeleteSVG />
                </Button>
            </div>
        </CardStl>
    );
};
import { ThanksForOrderStl } from "./thanksForOrder.stylrd";
import { ReactComponent as CompleteSVG } from "../../assets/icons/complete.svg";
import { ReactComponent as CloseSVG } from "../../assets/icons/close.svg";
import ContainerStl from "../../helperComponentsStyled/Conteiner";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router-dom";

export const ThanksForOrder = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/catalog');
    }

    return (
        <ThanksForOrderStl>
            <ContainerStl
                maxWidth="735px"
                padding="36px"
                columns
            >
                <Button
                    text=""
                    padding="0"
                    bgColor="none"
                    self="flex-end"
                    handleClick={handleClick}
                >
                    <CloseSVG />
                </Button>
                <div className="modal__wrapper">
                    <CompleteSVG />
                    <h1 className="modal__title">
                        Спасибо за заказ
                    </h1>
                    <p className="modal__text">
                        Наш менеджер свяжется с вами в ближайшее время
                    </p>
                </div>
            </ContainerStl>
        </ThanksForOrderStl>
    );
}
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { changeTypeCare } from "../../../store/reducers/productsSlice";
import { ChangeTypeCareStl } from "./changeTypeCare.styled";
import { Button } from "../../../ui/Button";

export function ChangeTypeCare() {
    const [newTypeCare, setNewTypeCare] = useState('');
    const [oldTypeCare, setOldTypeCare] = useState('');
    const careTypes = useAppSelector(state => state.products.type_care);
    const dispatch = useAppDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTypeCare(event.target.value);
    };

    const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setOldTypeCare(event.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (newTypeCare && newTypeCare !== '' && oldTypeCare && oldTypeCare !== '') {
            dispatch(changeTypeCare({ oldTypeCare, newTypeCare }));
            setNewTypeCare('')
        }
    }

    return (
        <ChangeTypeCareStl>
            <h3>Типы ухода:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Какой тип поменять:
                    <select name="typeCare" id="typeCare" onChange={handleChangeSelect}>
                        <option value="">Выберите тип ухода</option>
                        {careTypes.map(care => (
                            <option key={care} value={care}>{care}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Новое название типа:
                    <input
                        value={newTypeCare}
                        onChange={handleChange}
                        placeholder='Название нового типа ухода'
                        type="text"
                    />
                </label>
                <Button
                    text="Изменить"
                    type="submit"
                    self='flex-start'
                    padding='10px 30px'
                />
            </form>
        </ChangeTypeCareStl>
    );
}
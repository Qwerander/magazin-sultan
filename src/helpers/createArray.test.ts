import { numberToArray } from "./createArray";

describe('Создание массива', () => {
    it('Дожен быть создан массив от 1 до N', () => {
        const result = numberToArray(5);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('Должен быть пустой массив', () => {
        const result = numberToArray(0);
        expect(result).toEqual([]);
    });
})
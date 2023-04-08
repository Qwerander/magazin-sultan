import { calculateAmount } from "./calculateAmount";

test('Проверка на праыильный подсчет', () => {
    expect(calculateAmount([
        {
            product: {
                price: 10
            },
            count: 10
        },
        {
            product: {
                price: 50
            },
            count: 2
        },
    ])).toBe(200)
    expect(calculateAmount([
        {
            product: {
                price: 1
            },
            count: 100
        },
        {
            product: {
                price: 25
            },
            count: 4
        },
    ])).toBe(200)
    expect(calculateAmount([
        {
            product: {
                price: 123
            },
            count: 1
        },
        {
            product: {
                price: 123
            },
            count: 1
        },
    ])).toBe(246)
})
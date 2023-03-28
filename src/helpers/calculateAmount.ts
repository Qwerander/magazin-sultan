import { ProductInCartType } from "../store/reducers/cartSlice";

export function calculateAmount(cart: Array<ProductInCartType>): number {
    
    const total = cart.reduce((acc, item) => {
        const { count, product } = item;
        return acc + count * product.price!;
    }, 0);

    return total
}
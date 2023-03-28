import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUniqueManufactures } from '../../helpers/getUniqueManufactures';

export type ProductType = {
	id?: string
	url?: string
	title?: string
	type_volume?: string
	volume?: string
	barcode?: string
	manufactur?: string
	brand?: string
	type_care?: Array<string>
	description?: string
	price?: number
}

export type ProductsType = {
	products: Array<ProductType>
	manufactur: Array<string>
}

const initialState: ProductsType = {
	products: [],
	manufactur: [],
};


export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProducts: (state, action: PayloadAction<Array<ProductType>>) => {
			state.products = action.payload;
			state.manufactur = getUniqueManufactures(state.products);
		},
		addProduct: (state, action: PayloadAction<{ product: ProductType }>) => {
			const productNew = action.payload.product;
			state.products = state.products.filter(product => product.id !== productNew.id)
			state.products.push(productNew);
			state.manufactur = getUniqueManufactures(state.products);
		},
		deleteProduct: (state, action: PayloadAction<{id: string}>) => {
			state.products = state.products.filter(product => product.id !== action.payload.id);
			state.manufactur = getUniqueManufactures(state.products);
		},
		deleteAllProducts: (state) => {
			state.products = [];
			state.manufactur = [];
		},
	},

});

export const { 
	getProducts,
	addProduct,
	deleteProduct,
	deleteAllProducts,
} = productsSlice.actions;


export default productsSlice.reducer;

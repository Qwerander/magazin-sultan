import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUniqueManufactures } from '../../helpers/getUniqueManufactures';
import { getUniqueTypeCare } from '../../helpers/getUniqueTypeCare';


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
	type_care: Array<string>
}

const initialState: ProductsType = {
	products: [],
	manufactur: [],
	type_care: []
};


export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProducts: (state, action: PayloadAction<Array<ProductType>>) => {
			state.products = action.payload;
			state.manufactur = getUniqueManufactures(state.products);
			state.type_care = getUniqueTypeCare(state.products);
		},
		addProduct: (state, action: PayloadAction<{ product: ProductType }>) => {
			const productNew = action.payload.product;
			productNew.type_care = productNew.type_care?.map(care => care.trim().toLowerCase());
			state.products = state.products.filter(product => product.id !== productNew.id);
			state.products.push(productNew);
			state.manufactur = getUniqueManufactures(state.products);
			state.type_care = getUniqueTypeCare(state.products);
		},
		deleteProduct: (state, action: PayloadAction<{id: string}>) => {
			state.products = state.products.filter(product => product.id !== action.payload.id);
			state.manufactur = getUniqueManufactures(state.products);
			state.type_care = getUniqueTypeCare(state.products);
		},
		deleteAllProducts: (state) => {
			state.products = [];
			state.manufactur = [];
		},
		changeTypeCare: (state, action: PayloadAction<{oldTypeCare: string, newTypeCare: string}>) => {
			state.products = state.products.map((product => {
				if (product.type_care?.includes(action.payload.oldTypeCare)) {
					product.type_care = product.type_care.filter(care => care !== action.payload.oldTypeCare);
					product.type_care.push(action.payload.newTypeCare.toLowerCase().trim());
				} 
				return product
			}));
			state.type_care = getUniqueTypeCare(state.products);
		},
		
	},

});

export const { 
	getProducts,
	addProduct,
	deleteProduct,
	deleteAllProducts,
	changeTypeCare,
} = productsSlice.actions;


export default productsSlice.reducer;

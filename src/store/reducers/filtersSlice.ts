import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FiltersType = {
	manufactur: Array<string>
	typeCare: Array<string>
	minCost: number
	maxCost: number
	sortType: number
}

const initialState: FiltersType = {
	manufactur: [],
	typeCare: [],
	minCost: 0,
	maxCost: 10000,
	sortType: 0
};


export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilterManufacture: (state, action: PayloadAction<Array<string>>) => {
			state.manufactur = action.payload
		},
		setMinCost: (state, action: PayloadAction<{ minCost: number }>) => {
			state.minCost = action.payload.minCost
		},
		setMaxCost: (state, action: PayloadAction<{ maxCost: number }>) => {
			state.maxCost = action.payload.maxCost
		},
		addTypeCare: (state, action: PayloadAction<{ typeCare: string }>) => {
			state.typeCare.push(action.payload.typeCare)
		},
		removeTypeCare: (state, action: PayloadAction<{ typeCare: string }>) => {
			state.typeCare = state.typeCare.filter(type => type !== action.payload.typeCare)
		},
		changeSortType: (state, action: PayloadAction<{ sortType: number }>) => {
			state.sortType = action.payload.sortType
		}

	},

});

export const {
	setFilterManufacture,
	setMinCost,
	setMaxCost,
	addTypeCare,
	removeTypeCare,
	changeSortType,
} = filtersSlice.actions;


export default filtersSlice.reducer;

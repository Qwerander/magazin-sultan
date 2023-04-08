import { FiltersType, filtersSlice } from './filtersSlice';

describe('Тест filtersSlice', () => {
  let initialState: FiltersType;

  beforeEach(() => {
    initialState = {
      manufactur: [],
      typeCare: [],
      minCost: 0,
      maxCost: 10000,
      sortType: 0,
    };
  });

  it('должен обрабатывать setFilterManufacture', () => {
    const action = filtersSlice.actions.setFilterManufacture(['Apple', 'Samsung']);
    const newState = filtersSlice.reducer(initialState, action);
    expect(newState.manufactur).toEqual(['Apple', 'Samsung']);
  });

  it('должен обрабатывать setMinCost', () => {
    const action = filtersSlice.actions.setMinCost({ minCost: 500 });
    const newState = filtersSlice.reducer(initialState, action);
    expect(newState.minCost).toEqual(500);
  });

  it('должен обработать setMaxCost', () => {
    const action = filtersSlice.actions.setMaxCost({ maxCost: 5000 });
    const newState = filtersSlice.reducer(initialState, action);
    expect(newState.maxCost).toEqual(5000);
  });

  it('должен обработать addTypeCare', () => {
    const action = filtersSlice.actions.addTypeCare({ typeCare: 'Smartphone' });
    const newState = filtersSlice.reducer(initialState, action);
    expect(newState.typeCare).toEqual(['Smartphone']);
  });

  it('должен обработать removeTypeCare', () => {
    const action1 = filtersSlice.actions.addTypeCare({ typeCare: 'Smartphone' });
    const action2 = filtersSlice.actions.addTypeCare({ typeCare: 'Tablet' });
    const action3 = filtersSlice.actions.removeTypeCare({ typeCare: 'Smartphone' });
    let newState = filtersSlice.reducer(initialState, action1);
    newState = filtersSlice.reducer(newState, action2);
    newState = filtersSlice.reducer(newState, action3);
    expect(newState.typeCare).toEqual(['Tablet']);
  });

  it('должен обработать changeSortType', () => {
    const action = filtersSlice.actions.changeSortType({ sortType: 1 });
    const newState = filtersSlice.reducer(initialState, action);
    expect(newState.sortType).toEqual(1);
  });
});

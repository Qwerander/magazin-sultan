/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Тест коипонента Button', () => {
	it('рендеринг с текстом', () => {
		const { getByText } = render(<Button text="Click me" />);
		expect(getByText('Click me')).toBeInTheDocument();
	});

	it('рендринг с элементом', () => {
		const { getByText } = render(
			<Button>
				<span>Click me</span>
			</Button>
		);
		expect(getByText('Click me')).toBeInTheDocument();
	});

	it('вызов функции handleClick по клику мыши', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Button text="Click me" handleClick={handleClick} />
		);
		fireEvent.click(getByText('Click me'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('если значение параметра disabled равно true, то кнопка не активна', () => {
		const { getByText } = render(<Button text="Click me" disabled />);
		expect(getByText('Click me')).toBeDisabled();
	});
});
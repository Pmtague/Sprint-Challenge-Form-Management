import React from 'react';
import { render, act } from '@testing-library/react';
import Register from './Register';

describe('<Register />', () => {
	it('renders without crashing', () => {
		act(() => {
			render(<Register />)
		})
	});
});
import { renderWithRouter } from '../../utils/testUtils/renderWithRouter';
import { fireEvent } from '@testing-library/react';

import Login from '../Login';

describe('<Login />', () => {
    it('login', () => {
        window.alert = jest.fn();
        const { getByTestId } = renderWithRouter(Login);
        fireEvent.click(getByTestId('loginBtn'));

        expect(window.alert).toHaveBeenCalledTimes(1);
    });
});
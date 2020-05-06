import { renderWithRouter } from '../../utils/testUtils/renderWithRouter';
import Home from '../Home';

describe('<Home />', () => {
    it('check user email exist', () => {
        const { getByTestId } = renderWithRouter(Home);
        expect(getByTestId('data-email').children).toBeTruthy();
    });
});
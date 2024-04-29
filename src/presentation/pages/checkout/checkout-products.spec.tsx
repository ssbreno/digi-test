import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';

import { ProductListUseCaseInMemory } from '../../../data/useCases/product-list-usecase/in-memory/product-list.usecase.in.memory';
import { ListProducts } from '../lists-products/lists-products';
import { Header } from '@presentation/components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function makeSut() {
    render(<ListProducts productListUseCase={new ProductListUseCaseInMemory()} />);
}

describe('Product', () => {
    it('Should add 2 items to cart and click in cart button', async () => {
        makeSut();

        const { getByTestId } = render(
            <Router>
                <Header />
            </Router>
        );

        await waitFor(() =>
            screen.getByText('hero Product')
        );

        const inputTitle = getByTestId('product-1') as HTMLInputElement;
        const inputTitle2 = getByTestId('product-2') as HTMLInputElement;

        fireEvent.click(inputTitle);
        fireEvent.click(inputTitle2);

        const button = getByTestId('cart-button-test');

        fireEvent.click(button);

    });
});

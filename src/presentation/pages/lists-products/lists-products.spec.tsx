import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ProductListUseCaseInMemory } from '../../../data/useCases/product-list-usecase/in-memory/product-list.usecase.in.memory';
import { ListProducts } from './lists-products';

function makeSut() {
    render(<ListProducts productListUseCase={new ProductListUseCaseInMemory()} />);
}

describe('Product', () => {
    it('Should return Product with corrects id', async () => {
        makeSut();

        await waitFor(() =>
            screen.getByText('hero Product')
        );

        expect(screen.getAllByTestId('product-1').length).toBe(1);
    });
});

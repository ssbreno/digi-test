import { describe, expect, it, } from 'vitest';

import { productsListAPIMock } from '@data/mocks';
import { AxiosHttpClientInMemory } from '@infra/implementations';

import { ProductDeleteUseCase } from './product-delete.usecase';

describe('ProductDeleteUseCase', () => {
    it('Should call httpClient.request with correct method and URL', async () => {
        const axiosHttpClientInMemory = new AxiosHttpClientInMemory();
        const productsListAPI = productsListAPIMock();
        axiosHttpClientInMemory.response = { data: productsListAPI };

        const productDeleteUseCase = new ProductDeleteUseCase(axiosHttpClientInMemory);

        await productDeleteUseCase.delete(productsListAPI[0].id);

        expect(axiosHttpClientInMemory.method).toBe('delete');
        expect(axiosHttpClientInMemory.url).toBe(
            `http://localhost:3333/products/${productsListAPI[0].id}`
        );
    });
});

import { describe, expect, it } from 'vitest';

import { productsListAPIMock } from '@data/mocks';
import { ProductModel } from '@domain/models';
import { AxiosHttpClientInMemory } from '@infra/implementations';

import { ProductListUseCase } from './product-list.usecase';


type SutParam = {
  axiosHttpClientInMemory?: AxiosHttpClientInMemory;
};

function makeSut({
  axiosHttpClientInMemory = new AxiosHttpClientInMemory(),
}: SutParam = {}) {
  const sut = new ProductListUseCase(axiosHttpClientInMemory);
  return { sut, axiosHttpClientInMemory };
}

describe('ProductListUseCase', () => {
  it('Should return method list with correct method and URL', async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();
    axiosHttpClientInMemory.response = { data: productsListAPIMock() };

    const { sut } = makeSut({ axiosHttpClientInMemory });
    await sut.list();

    expect(axiosHttpClientInMemory.method).toBe('get');
    expect(axiosHttpClientInMemory.url).toBe(
      'http://localhost:3333/products'
    );
  });

  it('Should return method list with correct data correct', async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();
    const productsListAPI = productsListAPIMock();
    axiosHttpClientInMemory.response = { data: productsListAPI };

    const { sut } = makeSut({ axiosHttpClientInMemory });
    const data = await sut.list();

    expect(data[0]).toEqual({
      id_internal: productsListAPI[0].id,
      name_internal: productsListAPI[0].name,
      detail_internal: productsListAPI[0].detail,
      price_internal: productsListAPI[0].price,
      image_internal: productsListAPI[0].image,
      hero_internal: productsListAPI[0].hero,
    } as ProductModel);

    expect(data[1]).toEqual({
      id_internal: productsListAPI[1].id,
      name_internal: productsListAPI[1].name,
      detail_internal: productsListAPI[1].detail,
      price_internal: productsListAPI[1].price,
      image_internal: productsListAPI[1].image,

    } as ProductModel);
  });
});

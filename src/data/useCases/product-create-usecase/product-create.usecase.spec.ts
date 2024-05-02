import { describe, expect, it } from 'vitest';

import { ProductModel } from '@domain/models';
import { AxiosHttpClientInMemory } from '@infra/implementations';

import { ProductCreateUseCase } from './product-create.usecase';


type SutParam = {
  axiosHttpClientInMemory?: AxiosHttpClientInMemory;
};

function makeSut({
  axiosHttpClientInMemory = new AxiosHttpClientInMemory(),
}: SutParam = {}) {
  const sut = new ProductCreateUseCase(axiosHttpClientInMemory);
  return { sut, axiosHttpClientInMemory };
}

describe('ProductCreateUseCase', () => {
  it('Should return method list products with correct method and URL', async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();

    const { sut } = makeSut({ axiosHttpClientInMemory });
    await sut.create({
      id_internal: '01',
      name_internal: 'name example',
      detail_internal: 'detail example',
      price_internal: "10",
      hero_internal: 'hero example',
      info_internal: 'info example',
      offer_internal: 'offer example',
      image_internal: 'http://placehold.it/300x300/999/CCC',
    });

    expect(axiosHttpClientInMemory.method).toBe('post');
    expect(axiosHttpClientInMemory.url).toBe(
      'http://localhost:3333/products'
    );
    expect(axiosHttpClientInMemory.data).toEqual({
      id: '01',
      name: 'name example',
      detail: 'detail example',
      price: "10",
      hero: 'hero example',
      info: 'info example',
      offer: 'offer example',
      image: 'http://placehold.it/300x300/999/CCC',
    });
  });

  it('Should return method create products with correct data', async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory();
    const productsListAPI = {
      id: '02',
      name: 'name example2',
      detail: 'detail example2',
      price: "2",
      offer: 'offer example',
      image: 'http://placehold.it/300x300/999/CCC',
    };

    axiosHttpClientInMemory.response = {
      data: productsListAPI,
    };

    const { sut } = makeSut({ axiosHttpClientInMemory });
    const data = await sut.create({
      id_internal: '02',
      name_internal: 'name example2',
      detail_internal: 'detail example2',
      price_internal: "2",
      offer_internal: 'offer example',
      image_internal: 'http://placehold.it/300x300/999/CCC',
    });

    expect(data).toEqual({
      id_internal: productsListAPI.id,
      name_internal: productsListAPI.name,
      detail_internal: productsListAPI.detail,
      price_internal: productsListAPI.price,
      offer_internal: productsListAPI.offer,
      image_internal: productsListAPI.image
    } as ProductModel);
  });
});

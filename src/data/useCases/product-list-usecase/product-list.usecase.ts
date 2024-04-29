import { IProductList } from '@domain/contracts';
import { ProductModelAPI } from '@domain/models';
import { IHttpClient } from '@infra/contracts';

import { productModelAdapter } from '..';

export class ProductListUseCase implements IProductList {
  constructor(
    private readonly httpClient: IHttpClient<ProductModelAPI[]>
  ) { }

  async list(): Promise<IProductList.Model> {
    const { data } = await this.httpClient.request({
      method: 'get',
      url: 'http://localhost:3333/posts',
    });

    return data.map(productModelAdapter.toProductModel);
  }
}

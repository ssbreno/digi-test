import { IProductCreate } from '@domain/contracts';
import { ProductModel, ProductModelAPI } from '@domain/models';
import { IHttpClient } from '@infra/contracts';

import { productModelAdapter } from '..';

export class ProductCreateUseCase implements IProductCreate {
  constructor(
    private readonly httpClient: IHttpClient<ProductModelAPI>
  ) { }

  async create(params: IProductCreate.Params): Promise<ProductModel> {
    const { data } = await this.httpClient.request({
      method: 'post',
      url: 'http://localhost:3333/products',
      body: {
        id: params.id_internal,
        name: params.name_internal,
        detail: params.detail_internal,
        price: params.price_internal,
        hero: params?.hero_internal,
        info: params?.info_internal,
        offer: params?.offer_internal,
        image: params.image_internal,
      },
    });

    return productModelAdapter.toProductModel(data);
  }
}

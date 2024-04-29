import { IProductList } from '../../../../domain/contracts/product.contracts';
import { productsListMock } from '../../../mocks/product-list.mock';

export class ProductListUseCaseInMemory implements IProductList {
  async list(): Promise<IProductList.Model> {
    return await Promise.resolve(productsListMock());
  }
}

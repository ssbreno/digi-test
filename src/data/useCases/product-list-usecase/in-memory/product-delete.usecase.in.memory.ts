import { IProductDelete } from '@domain/contracts';

import { IProductList } from '../../../../domain/contracts/product.contracts';

export class ProductDeleteUseCaseInMemory implements IProductDelete {
  constructor(private productListUseCase: IProductList) { }

  async delete(): Promise<void> {
    try {
      await this.productListUseCase.list();
      console.log(`Produto excluído com sucesso!`);
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      throw new Error('Erro ao excluir produto.');
    }
  }
}

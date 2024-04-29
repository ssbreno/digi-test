import { IProductDelete } from '@domain/contracts';
import { IHttpClient } from '@infra/contracts';

export class ProductDeleteUseCase implements IProductDelete {
  constructor(
    private readonly httpClient: IHttpClient<void> // Não há retorno esperado para a exclusão
  ) { }

  async delete(productId: string): Promise<void> {
    await this.httpClient.request({
      method: 'delete',
      url: `http://localhost:3333/posts/${productId}`, // Supondo que o endpoint para excluir um produto seja /products/:productId
    });
  }
}

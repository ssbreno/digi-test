
export interface IProductDelete {
  delete(productId: string): Promise<void>;
}

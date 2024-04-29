import { ProductModel } from "@domain/models";

export interface IProductList {
  list(): Promise<IProductList.Model>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IProductList {
  export type Model = ProductModel[];
}

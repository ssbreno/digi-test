import { ProductModel } from "@domain/models";

export interface IProductCreate {
  create(params: IProductCreate.Params): Promise<ProductModel>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IProductCreate {
  export type Params = {
    id_internal: string;
    name_internal: string;
    detail_internal: string;
    price_internal: string;
    hero_internal?: string;
    info_internal?: string;
    offer_internal?: string;
    image_internal: string;
  };
}

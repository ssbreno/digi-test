export interface ProductModel {
  id_internal: string;
  name_internal: string;
  detail_internal: string;
  price_internal: string;
  hero_internal?: string;
  info_internal?: string;
  offer_internal?: string;
  image_internal: string;
}


export type ProductModelAPI = {
  id: string;
  name: string;
  detail: string;
  price: string;
  hero?: string;
  info?: string;
  offer?: string;
  image: string;
};


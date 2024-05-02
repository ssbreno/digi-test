import { ProductModel, ProductModelAPI } from "@domain/models";

function toProductModel(productApi: ProductModelAPI): ProductModel {
  return {
    id_internal: productApi.id,
    name_internal: productApi.name,
    detail_internal: productApi.detail,
    price_internal: productApi.price,
    hero_internal: productApi.hero,
    info_internal: productApi.info,
    offer_internal: productApi.offer,
    image_internal: productApi.image
  };
}

export const productModelAdapter = { toProductModel };

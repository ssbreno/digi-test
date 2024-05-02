import { ProductModel, ProductModelAPI } from "@domain/models";

export function productsListMock(): ProductModel[] {
  return [
    {
      id_internal: "1",
      name_internal: "hero Product",
      detail_internal: "Lorem ipsum dolor sit amet",
      price_internal: "99",
      hero_internal: "OMG This just came out today!",
      image_internal: "http://placehold.it/940x300/999/CCC"
    },
    {
      id_internal: "2",
      name_internal: "Product 3",
      detail_internal: "Lorem ipsum dolor sit amet",
      price_internal: "99",
      image_internal: "http://placehold.it/300x300/999/CCC"
    },
  ];
}

export function productsListAPIMock(): ProductModelAPI[] {
  return [
    {
      id: "1",
      name: "hero Product",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      hero: "OMG This just came out today!",
      image: "http://placehold.it/940x300/999/CCC"
    },
    {
      id: "2",
      name: "Product 3",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "http://placehold.it/300x300/999/CCC"
    },
  ];
}

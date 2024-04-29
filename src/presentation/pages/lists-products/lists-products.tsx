import { ProductSummary } from "@presentation/components/ProductSummary/ProductSummary";
import { Container, ShelfGrid } from "./styles";
import { useEffect, useState } from "react";
import { IProductList } from "@domain/contracts";

type Props = {
  productListUseCase: IProductList;
};

export function ListProducts({ productListUseCase }: Props) {
  const [products, setProducts] = useState<IProductList.Model>([]);

  useEffect(() => {
    async function loadProducts() {
      const result = await productListUseCase.list();
      setProducts(result);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <ShelfGrid>
        {products.map((product) => (
          <ProductSummary key={product.id_internal} product={product} />
        ))}
      </ShelfGrid>
    </Container>
  );
}

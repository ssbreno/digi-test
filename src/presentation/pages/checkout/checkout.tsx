import useCartStore from "@presentation/store/cart";
import {
  Container,
  ContainerTexts,
  ContentImageAndPrice,
  EmptyCartMessage,
  OrderSummary,
  RemoveButton,
  SelectedProduct,
} from "./styles";
import { Trash } from "phosphor-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductModel } from "@domain/models";

export function Checkout() {
  const { removeItemFromCart, cartItems } = useCartStore();

  const handleDeleteProduct = (product: ProductModel) => {
    removeItemFromCart(product?.id_internal);
    toast.success(`${product?.name_internal} removido do carrinho!`);
  };

  return (
    <Container>
      <OrderSummary>
        {cartItems?.length === 0 ? (
          <EmptyCartMessage>
            Você ainda não adicionou produtos no carrinho.
          </EmptyCartMessage>
        ) : (
          <ul style={{ width: "100%", height: "90%" }}>
            {cartItems?.map((product: ProductModel) => {
              return (
                <SelectedProduct key={product?.id_internal}>
                  <ContentImageAndPrice>
                    <img
                      src={product?.image_internal}
                      alt="product name"
                      className="product-image"
                    />

                    <RemoveButton
                      className="button-img"
                      onClick={() => handleDeleteProduct(product)}
                    >
                      <Trash color="#8047F8" />
                    </RemoveButton>
                  </ContentImageAndPrice>

                  <ContainerTexts>
                    <p className="product-name">{product?.name_internal}</p>
                    <p className="product-price">R$ {product?.price_internal}</p>
                  </ContainerTexts>

                  <RemoveButton
                    data-testid={`remove-btn-${product?.id_internal}`}
                    onClick={() => handleDeleteProduct(product)}>
                    <Trash color="#8047F8" />
                  </RemoveButton>
                </SelectedProduct>
              );
            })}
          </ul>
        )}
      </OrderSummary>
    </Container>
  );
}

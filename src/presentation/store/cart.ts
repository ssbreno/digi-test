import { ProductModel } from "@domain/models";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cartItems: ProductModel[];
  addItemToCart: (item: ProductModel) => void;
  removeItemFromCart: (productId: number | string) => void;
}

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cartItems: [],

      addItemToCart: (item) => {

        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id_internal === item.id_internal
        );

        if (itemExists) {

          set({ cartItems: [...get().cartItems] });
        } else {
          set({ cartItems: [...get().cartItems, { ...item }] });
        }
      },

      removeItemFromCart: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id_internal === productId
        );

        if (itemExists) {
          const updatedCartItems = get().cartItems.filter(
            (item) => item.id_internal !== productId
          );
          set({ cartItems: updatedCartItems });
        }
      },
    }),
    {
      name: "cart-items",
    }
  )
);

export default useCartStore;

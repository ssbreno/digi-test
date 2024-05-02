import useCartStore from '@presentation/store/cart';
import { CartButton, ItemQuantity } from './styles'
import { ShoppingCart } from 'phosphor-react'

export function MiniCart() {
  const { cartItems } = useCartStore();

  return (
    <CartButton data-testid="cart-button-test" href="/checkout">
      <ItemQuantity data-testid="cart-number" >{cartItems?.length}</ItemQuantity>
      <ShoppingCart size={22} weight="fill" color={'#C47F17'} />
    </CartButton>
  )
}

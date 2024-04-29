import { toast } from 'react-toastify'

import { ProductModel } from '@domain/models';
import useCartStore from '@presentation/store/cart';

import {
  Container,
  PricingAndAddToCart,
  ContentContainer,
  Pricing,
  AddToCartButton,
  ContentDetailAndName,
} from './styles'

import 'react-toastify/dist/ReactToastify.css'


type Props = {
  product: ProductModel;
};

export function ProductSummary({ product }: Props) {

  const { addItemToCart } = useCartStore();

  const onAddToCart = (product: ProductModel) => {
    addItemToCart(product);
    toast.success(`${product?.name_internal} adicionado ao carrinho!`)
  };

  return (
    <Container>
      <ContentContainer>
        <div>
          <img className="image" src={product?.image_internal} alt={product?.image_internal} />
        </div>
        <ContentDetailAndName>
          <p className="name">{product?.name_internal}</p>
          <p className="detail">{product?.detail_internal}</p>
          {product?.hero_internal && <p className="moreDetail">Hero: {product?.hero_internal}</p>}
          {product?.info_internal && <p className="moreDetail">Info: {product?.info_internal}</p>}
          {product?.offer_internal && <p className="moreDetail">Offer: {product?.offer_internal}</p>}

        </ContentDetailAndName>
      </ContentContainer>

      <PricingAndAddToCart>
        <Pricing>
          <span className="currency">R$</span>
          <span className="price">{product?.price_internal}</span>
        </Pricing>
        <AddToCartButton data-testid={`product-${product?.id_internal}`} onClick={() => onAddToCart(product)}>
          <p>+</p>
        </AddToCartButton>
      </PricingAndAddToCart>
    </Container>
  )
}

import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { ProductListUseCase } from '@data/useCases';
import { AxiosHttpClient } from '@infra/implementations';
import { ListProducts } from '@presentation/pages';
import { Checkout } from '@presentation/pages/checkout/checkout';

export function Router() {
  const productListUseCase = new ProductListUseCase(new AxiosHttpClient());

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ListProducts productListUseCase={productListUseCase} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

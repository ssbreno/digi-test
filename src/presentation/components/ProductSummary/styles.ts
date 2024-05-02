import styled from 'styled-components'

export const Container = styled.div`
  background-color: #eaeaea;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 0 1.2rem;
  align-items: center;
  display:flex;
  flex-direction: column;
  padding: 1rem 0;

  .image {
    width: 180px;
    height: 120px;
    border-radius: 8px;
    resize: cover;
  }
`

export const ContentDetailAndName = styled.div`
width: 260px;
align-items: center;
  flex-direction: column;
`

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  .types {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .type {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: 700;
    gap: 0.9rem;
  }

  .name {
    font-size: 1.25rem;
    text-align: center;
    color: black;
    font-weight: 700;
  }

  .detail {
    font-size: 0.88rem;
    color: gray;
    line-height: 130%;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    margin:  8px 0;
  }

  .moreDetail {
    font-size: 0.88rem;
    color: green;
    line-height: 130%;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    margin:  8px 0;
    -webkit-box-orient: vertical;
  }

  
`

export const PricingAndAddToCart = styled.div`
  width: 70%;
  max-height: 2.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Pricing = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: black;

  .currency {
    font-size: 0.8rem;
  }

  .price {
    font-size: 1.5rem;
    color: black;

  }
`
export const AddToCartButton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: black;
  align-items: center;
  transition: background-color 0.3s;
  justify-content: center;
  display: flex;

  &:hover {
  background-color: #2a2a2a;

  }
`

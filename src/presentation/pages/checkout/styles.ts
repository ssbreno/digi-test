import styled from "styled-components";

export const Container = styled.div`
  max-width: 72.5rem;
  margin: 0 auto 10rem auto;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const OrderSummary = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  overflow-y: scroll;
  width: 90%;
  height: 90%;
  padding: 0 2.5rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.12rem;
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Baloo 2", cursive;
  margin-bottom: 0.9rem;
`;
export const RemoveButton = styled.button`
  border: none;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  .btn-text {
    display: block;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ContentImageAndPrice = styled.div`
  .product-image {
    width: 6rem;
    height: 6rem;
  }

  button {
    display: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: row;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    button {
      display: block;
    }
  }
`;
export const ContainerTexts = styled.div`
  flex-direction: row;
  display: flex;
  max-width: 400px;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  .product-name {
    color: ${(props) => props.theme["base-subtitle"]};

    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    max-width: 300px;
  }

  .product-price {
    font-size: 20px;

    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  @media (max-width: 480px) {
    .product-name {
      max-width: 130px;
    }

    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const SelectedProduct = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  margin: 2rem 0;
  padding: 1.5rem;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const EmptyCartMessage = styled.li`
  width: 100%;
  text-align: center;
  font-style: italic;
  font-weight: 700;
  color: ${(props) => props.theme["base-label"]};
`;

import React from "react";
import styled from "styled-components";

export const Product = ({ store, addProductHandler }) => {
  console.log(store);
  return (
    <MainContainer>
      <UnorderedList>
        {store.map((elem) => (
          <ListItem key={elem.id}>
            <ImageContainer>
              <img src={elem.url} alt="product photos" />
            </ImageContainer>

            <ProductContainer>
              <ProductText>
                {elem.productName} - $ {elem.staticPrice}
              </ProductText>

              <Button
                onClick={() => addProductHandler(elem.id)}
                disabled={elem.quantity > 0}
              >
                Add
              </Button>
            </ProductContainer>
          </ListItem>
        ))}
      </UnorderedList>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ListItem = styled.li`
  list-style: none;
  width: 210px;
  height: 310px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.259);
`;

const ImageContainer = styled.div`
  width: 207px;
  height: 170px;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ProductText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

const Button = styled.button`
  border-radius: 15px;
  border: none;
  font-size: 1.8rem;
  padding: 10px 36px;
  background-color: #47f06c;
  color: #fff;

  :disabled {
    background-color: gray;
  }
`;

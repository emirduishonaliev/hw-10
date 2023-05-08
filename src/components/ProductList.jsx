import React from "react";
import styled from "styled-components";

export const ProductList = ({
  store,
  incrementProductHandler,
  decrementProductHandler,
  deleteProductHandler,
}) => {
  const total = store.map((el) => {
    if (el.quantity === 0) {
      const result = { ...el, price: (el.price = 0) };
      return result.price;
    } else {
      return el.price;
    }
  });

  const resTotal = total.reduce((a, b) => a + b, 0);

  let num = 1;

  return (
    <MainContainer>
      <div>
        <Table>
          <TableHead>
            <p className="num">#</p>
            <p style={{ marginBottom: "0px" }}>Product</p>
            <p>Product Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </TableHead>

          {store.map((elem) => {
            return (
              elem.quantity !== 0 && (
                <TableBody key={elem.id}>
                  <span>{num++}</span>
                  <ImgContain>
                    <img src={elem.url} alt="Product" />
                  </ImgContain>
                  <div>{elem.productName}</div>
                  <div>${elem.price}</div>

                  <ContainCount>
                    <CountButton
                      onClick={() => decrementProductHandler(elem.id)}
                    >
                      -
                    </CountButton>
                    <span>{elem.quantity}</span>
                    <CountButton
                      onClick={() => incrementProductHandler(elem.id)}
                    >
                      +
                    </CountButton>
                  </ContainCount>
                  <div>
                    <DeleteButton onClick={() => deleteProductHandler(elem.id)}>
                      Delete
                    </DeleteButton>
                  </div>
                </TableBody>
              )
            );
          })}
        </Table>
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "3rem" }}>Total: {resTotal}</p>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  font-size: 1.6rem;
  font-weight: 600;
  border-top: solid 1px #dcdcdc;

  .num {
    width: 100px;
    display: flex;
    justify-content: center;
    margin-top: -10px;
  }

  p {
    width: 240px;
    height: 20px;
    display: flex;
    justify-content: center;
    margin-top: -10px;
  }
`;

const ImgContain = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 95px;
    height: 76px;
    object-fit: contain;
  }
`;

const TableBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  border-top: 3px solid #dcdcdc;

  div {
    width: 240px;
    display: flex;
    justify-content: center;
  }
`;

const ContainCount = styled.div`
  display: flex;
  gap: 10px;
`;

const CountButton = styled.button`
  padding: 10px;
  background-color: #19a1b7;
  color: #fff;
  border-radius: 4px;
  border: none;
`;

const DeleteButton = styled.button`
  padding: 10px;
  background-color: #de3445;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 1.4rem;
`;

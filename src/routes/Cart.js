import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, changeAge } from "./../store.js";
import { useState } from "react";
function Child() {
  return <div>자식임</div>;
}

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);
  return (
    <div>
      <h6>
        {state.user.name}
        {state.user.age}의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(changeAge(1));
        }}
      >
        버튼
      </button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, i) => (
            <tr>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;

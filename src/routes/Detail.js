import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [counter, setCounter] = useState(0);
  let [num, setNum] = useState("");

  useEffect(() => {
    if (isNaN(num) == true) {
      prompt("그러지마세요");
    }
  }, [num]);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  let { id } = useParams();

  let 찾은상품 = props.shoes.find((item) => {
    return item.id == id;
  });

  return (
    <div>
      <div className="container">
        {alert === true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
        <div>{counter}</div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          ❤️
        </button>

        <input
          type="text"
          placeholder="숫자만입력하세요"
          onChange={(e) => {
            setNum(e.target.value);
          }}
        ></input>

        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

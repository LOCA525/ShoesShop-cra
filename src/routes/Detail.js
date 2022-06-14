import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav, TabContent } from "react-bootstrap";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let 찾은상품 = props.shoes.find((item) => {
    return item.id == id;
  });
  let [counter, setCounter] = useState(0);
  let [num, setNum] = useState("");
  let [탭, set탭] = useState(0);
  let [fade2, setFade2] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    let 꺼낸거 = localStorage.setItem("watched", [찾은상품.id]);
    꺼낸거 = JSON.parse(꺼낸거);
    꺼낸거.push(찾은상품.id);
    꺼낸거 = new Set(꺼낸거);
    꺼낸거 = Array.from(꺼낸거);
    localStorage.setItem("watched", JSON.stringify(꺼낸거));
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      prompt("그러지마세요");
    }
  }, [num]);

  useEffect(() => {
    setFade2("end");
  }, []);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  let { id } = useParams();

  return (
    <div className={`detailPage start ${fade2}`}>
      <div className="container">
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
            <button
              className="btn btn-danger"
              onClick={() => {
                // dispatch(addItem({id:찾은상품.id,name:'hi'))
              }}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              set탭(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              set탭(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              set탭(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent2 탭={탭} shoes={props.shoes} />
    </div>
  );
}
function TabContent2({ 탭, shoes }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [탭]);

  return <div className={`start ${fade}`}>{[<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][탭]}</div>;
}

export default Detail;

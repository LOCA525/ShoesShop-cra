import "./App.css";
import { Button, Navbar, Container, Nav, Row, Col, NavItem } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import Detail from "./routes/Detail.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);

  let navigate = useNavigate();
  let { id } = useParams();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">존나좋은신발싸게팜</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <div className="main-bg"></div>
                <Row xs={3} md={3} lg={3}>
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                  ;
                </Row>
              </div>
              <button
                onClick={() => {
                  axios.get("https://codingapple1.github.io/shop/data2.json").then((결과) => {
                    console.log(결과.data);
                    console.log(shoes);
                    let copy = [...shoes, ...결과.data];
                    setShoes(copy);
                  });
                }}
              >
                더보기
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} alt="hi" width="80%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;

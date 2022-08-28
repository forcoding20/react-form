import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from '../images/movie-1.png'
const NavBar = ({ search }) => {

  const onSearch = (word) => {
    search(word)
  }
  return (
    <div className="nav-style w-90">
      <Container>
      
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="Search.." />
            </div>
          </Col>
        </Row>
        <Row className="pt-2 ">
<h4 className="textnav  w-100 pt-1  d-flex align-items-center" xs="10" lg="11">Millions of movies, series, and people are ready to explore. Explore now.</h4>
</Row>
        
      </Container>
    </div>
  );
};

export default NavBar;

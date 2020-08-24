import React, { Component, Fragment } from 'react'
import { Container, Header } from "semantic-ui-react"; 
// import Youtube from '../../component/Youtube/Youtube'
// import Product from '../Product/Product'
// import LifeCycle from "../LifeCycle/LifeCycle"
import BlogPost from "../BlogPost/BlogPost"

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          {/* <h1 className="d-block p-3 h-12 bg-black text-white">
          Yotube Component
        </h1>
        <div className="flex">
          <Youtube title="Video 01" body="Toturial 01" />
          <Youtube title="Video 02" body="Toturial 02" />
          <Youtube title="Video 03" body="Toturial 03" />
          <Youtube title="Video 04" body="Toturial 04" />
          <Youtube />
        </div> */}
          {/* <h1 className="d-block p-3 h-12 bg-black text-white">
            Product Component
          </h1>
          <Product /> */}
          {/* <h1 className="d-block p-3 h-12 bg-black text-white">
            LifeCycle Component
          </h1>
          <LifeCycle /> */}
          <Header className="mt-5" as="h1" dividing>
            BlogPost Component
          </Header>
          <BlogPost />
        </Container>
      </Fragment>
    );
  }
}

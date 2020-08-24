import React, {Component, Fragment} from 'react';
import AOS from "aos";
import LazyLoad from "vanilla-lazyload";
import "aos/dist/aos.css";
import { Button } from "semantic-ui-react";
// Only initialize it one time for the entire application
if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}
class Post extends Component {
  componentDidMount() {
    AOS.init();
    document.lazyLoadInstance.update();
  }
  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }
  render() {
    return (
      <Fragment>
        <div className="flex my-3" data-aos="fade-up">
          <div className="w-1/6 ml-auto bg-gray-500 shadow-lg">
            <img
              data-src="https://images.unsplash.com/photo-1577911945168-b4a2d919fc73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="img-thumb"
              className="lazy"
            />
          </div>
          <div className="w-1/2 mr-auto bg-gray-400 p-3 shadow-lg">
            <h1 className="text-purple-800 text-2xl font-bold">
              {this.props.title}
            </h1>
            <p className="text-gray-600 mt-4 leading-5 font-sans">
              {this.props.body}
              <Button primary>Primary</Button>
            </p>
          </div>
        </div>
        <div className="clearfix"></div>
      </Fragment>
    );
  }
}

export default Post;

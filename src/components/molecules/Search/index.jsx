import React, { Component } from "react";
import StickyBox from "react-sticky-box";
export default class Post extends Component {
  render() {
    return (
      <React.Fragment>
      <StickyBox
              bottom={false}
              offsetTop={55}
              offsetBottom={0}
              className="z-10"
            >
        <div className="py-3 bg-trasparent flex justify-start items-center">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="p-3 rounded-full w-full h-10 appearance-none outline-none focus:bg-white focus:shadow-xs focus:text-gray-800 bg-gray-300 transition-shadow duration-300 ease-in-out"
          />
          <button
            type="submit"
            className="ml-1 outline-none focus:outline-none active:outline-none"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
            </StickyBox>
      </React.Fragment>
    );
  }
}
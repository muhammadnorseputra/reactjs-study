import React, { Component } from "react";
export default class Post extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{top: '53px'}} className="py-3 bg-gray-200 flex justify-start items-center z-10 sticky top-0">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="p-3 rounded-full w-full h-10 appearance-none outline-none focus:bg-white focus:shadow-xs focus:text-gray-800 bg-gray-300 transition-shadow duration-300 ease-out"
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
      </React.Fragment>
    );
  }
}
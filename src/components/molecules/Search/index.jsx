import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="p-3 bg-white flex justify-start items-center">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="p-3 ml-2 rounded-full w-1/2 h-10 appearance-none outline-none focus:bg-white focus:shadow focus:text-green-400 bg-gray-300 transition-shadow duration-300 ease-in-out"
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
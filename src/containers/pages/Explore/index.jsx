import React, { Component, Fragment } from 'react'


export default class Office extends Component {
  render() {
    return (
      <Fragment>
        <header className="p-3 border-b border-gray sticky top-0 w-inline bg-white font-ms font-bold text-xl">
          Explore
        </header>
        <div className="bg-white border-b-2 font-ms">
          <nav className="flex justify-around sm:flex-row">
            <button className="text-gray-600 py-4 px-6 block hover:bg-blue-100 hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-bold border-blue-500 w-full">
              Lastest
            </button>
            <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none w-full hover:bg-blue-100 hover:text-blue-500 font-bold">
              Photos
            </button>
            <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none w-full hover:bg-blue-100 hover:text-blue-500 font-bold">
              Videos
            </button>
            <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none w-full hover:bg-blue-100 hover:text-blue-500 font-bold">
              Files
            </button>
          </nav>
        </div>
      </Fragment>
    );
  }
}

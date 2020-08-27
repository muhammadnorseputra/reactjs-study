import React, { Component, Fragment } from 'react'


export default class Office extends Component {
  render() {
    return (
      <Fragment>
        <header className="p-3 mb-3 border-b border-gray sticky top-0 w-inline bg-white font-ms font-bold text-xl">
          Notification
        </header>
        <p className="p-3 font-roboto">
          The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </Fragment>
    );
  }
}

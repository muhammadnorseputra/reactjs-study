import React, { Component, Fragment } from 'react'
import { Back } from '../../../components/atoms/Button/Back'

export default class Office extends Component {
  render() {
    return (
      <Fragment>
        <header className="p-1 z-30 sticky top-0 font-bold text-xl">
          <Back />
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

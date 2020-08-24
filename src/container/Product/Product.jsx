import React, { Component, Fragment } from 'react'
import ProductAction from '../ProducAction/ProductAction'

export default class Product extends Component {
  state = {
    counter: 5
  }
  handleCounterChange = (newValue) => {
    this.setState({
      counter: newValue
    })
  }

  render() {
    return (
      <Fragment>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              This counter is :{" "}
              <span className="font-bold text-purple-600">
                {this.state.counter}
              </span>
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <ProductAction
            onCounterChange={(value) => this.handleCounterChange(value)}
          />
        </div>
      </Fragment>
    );
  }
}

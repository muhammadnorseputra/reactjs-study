import React, { Component } from 'react';

export default class ProductAction extends Component {
  state = {
    counter: 5,
  };
  
  handleCounterChange = (newVal) => {
    this.props.onCounterChange(newVal);
  }

  handleMinus = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      }, () => {
        this.handleCounterChange(this.state.counter);      
      });
    }
    
  };

  handlePlus = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        this.handleCounterChange(this.state.counter);
      }
    );
  };
  render() {
    return (
      <div className="px-6 pt-4 pb-2">
        <div className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Minus
              </label>
              <button
                className="px-4 py-2 my-2 ml-2 bg-red-500 text-white rounded-lg hover:bg-red-400 float-left"
                onClick={this.handleMinus}
              >
                -
              </button>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div className="relative">
                <input
                  className="bg-white hover:shadow-outline focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  type="number"
                  value={this.state.counter}
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Plus
              </label>
              <button
                className="px-4 py-2 my-2 ml-2 bg-green-500 text-white rounded-lg hover:bg-green-400 float-left"
                onClick={this.handlePlus}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

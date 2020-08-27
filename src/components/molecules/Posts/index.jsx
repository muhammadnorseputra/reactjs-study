import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "react-image-appear";

export default class Post extends Component {
  render() {
    const { Sumber, SumberId, TglPublish, ImgUrl, Title, Description } = this.props
    return (
      <React.Fragment>
        <div className="w-full border-b bg-white mx-3 md:mx-0 lg:mx-0 hover:bg-gray-100">
          <div className=" sticky top-0 w-full flex justify-between p-3 bg-white z-10">
            <div className="flex">
              <div className="rounded-full h-8 w-8 bg-green-500 flex items-center justify-center overflow-hidden">
                <Img
                  src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                  alt="profilepic"
                />
              </div>
              <span className="pt-1 ml-2 font-bold text-sm">{Sumber}</span>
              <span className="pt-1 ml-2 font-bold text-sm text-gray-500">
                &bull;
              </span>
              <span className="pt-1 ml-2 font-bold text-sm text-gray-600">
                {TglPublish}
              </span>
            </div>
            <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
              <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
            </span>
          </div>
          <div className="p-3 relative">
            <Img
              className="w-full bg-cover rounded-lg"
              src={ImgUrl}
              alt="React Cool Img"
            />
            <button className="w-auto bg-orange-300 rounded-full opacity-75 focus:outline-none px-2 py-1 text-blue-600 hover:bg-orange-200 hover:text-blue-800 absolute bottom-0 right-0 mr-10 mb-10">
              <span className="opacity-100">{SumberId}</span>
            </button>
          </div>
          <div className="px-3 pb-2 mb-4 block w-full">
            <div className="flex justify-around">
              <div className="item-center group">
                <button className="group-hover:bg-gray-200 rounded-full w-8 h-8 transition-color duration-300 ease-in-out">
                  <FontAwesomeIcon icon={["far", "eye"]} />
                </button>
                <span className="text-sm text-gray-600 cursor-pointer font-normal group-hover:text-gray-800 ml-1">
                  12 Views
                </span>
              </div>
              <div className="item-center group">
                <button className="group-hover:bg-red-200 rounded-full w-8 h-8 transition-color duration-300 ease-in-out">
                  <FontAwesomeIcon icon={["far", "heart"]} />
                </button>
                <span className="text-sm text-gray-600 cursor-pointer font-normal group-hover:text-gray-800 ml-1">
                  12 Likes
                </span>
              </div>
              <div className="item-center group">
                <button className="group-hover:bg-green-200 rounded-full w-8 h-8 transition-color duration-300 ease-in-out">
                  <FontAwesomeIcon icon={["far", "comment"]} />
                </button>
                <span className="text-sm text-gray-600 cursor-pointer font-normal group-hover:text-gray-800 ml-1">
                  20 Comments
                </span>
              </div>
              <div className="item-center group">
                <button className="group-hover:bg-blue-200 rounded-full w-8 h-8 transition-color duration-300 ease-in-out">
                  <FontAwesomeIcon icon={["far", "share-square"]} />
                </button>
                <span className="text-sm text-gray-600 cursor-pointer font-normal group-hover:text-gray-800 ml-1">
                  10 Shared
                </span>
              </div>
            </div>
            <div className="mt-5 mx-6">
              <p className="text-2xl font-bold font-ms">{Title}</p>
              <div className="mb-2 text-medium">{Description}</div>
            </div>
            <div className="font-sm flex justify-start item-center mx-6">
              <button className="w-auto border-gray-300 border-2 rounded-md focus:outline-none focus:border-gray-300 px-2 py-1 text-blue-600 hover:border-gray-500 hover:text-blue-800">
                <span>#react</span>
              </button>
              <button className="w-auto border-gray-300 border-2 rounded-md focus:outline-none focus:border-gray-300 px-2 py-1 text-blue-600 hover:border-gray-500 hover:text-blue-800 ml-2">
                <span>#css in js</span>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Post.defaultProps = {
  SumberId: "Tanpa kategori",
};
import React from "react";
import StickyBox from "react-sticky-box";
import PerfectScrollbar from 'react-perfect-scrollbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgSuspense from 'img-suspense';
import { Loader_content as Loading } from '../../../components/atoms/Loader'

const Sidebar = () => {
  return (
    <React.Fragment>
      <StickyBox bottom={false} offsetTop={0} offsetBottom={0}>
        <div className="z-0 h-screen">
        <div className="max-w-full">
          <div className="flex py-3 pl-3 pr-1 border-b-2 justify-between bg-transparent rounded-t-lg mb-3">
            <div className="flex justify-start items-center">
              <h2 className="text-xl font-semibold text-gray-600">
                Populer Post
              </h2>
            </div>
            <div className="flex items-center">
              <button className="text-center transition-color duration-300 rounded-full h-8 w-8 hover:bg-green-100 hover:text-green-400">
                <FontAwesomeIcon size="sm" icon={["fas", "cog"]} />
              </button>
            </div>
          </div>
          <div className="h-64">
            <PerfectScrollbar>
              <div className="flex rounded-lg hover:bg-green-100 transition-color duration-200">
                <div className="w-full cursor-pointer">
                  <p className="px-1 ml-2 mt-3 w-auto text-xs text-gray-600">
                    1 . Trending
                  </p>
                  <h2 className="px-1 ml-2 font-bold text-gray-800">
                    #Microsoft363
                  </h2>
                  <p className="px-1 ml-2 mb-3 text-xs text-gray-600">
                    5,466 Views
                  </p>
                </div>
                <div className="flex-1 px-1 py-2">
                  <button className="text-center transition-color duration-300 rounded-full h-8 w-8 hover:bg-gray-200">
                    <FontAwesomeIcon size="sm" icon={["fas", "angle-down"]} />
                  </button>
                </div>
              </div>
              <div className="flex rounded-lg hover:bg-green-100 transition-color duration-200">
                <div className="w-full cursor-pointer">
                  <p className="px-1 ml-2 mt-3 w-auto text-xs text-gray-600">
                    1 . Trending
                  </p>
                  <h2 className="px-1 ml-2 font-bold text-gray-800">
                    #Microsoft363
                  </h2>
                  <p className="px-1 ml-2 mb-3 text-xs text-gray-600">
                    5,466 Views
                  </p>
                </div>
                <div className="flex-1 px-1 py-2">
                  <button className="text-center transition-color duration-300 rounded-full h-8 w-8 hover:bg-gray-200">
                    <FontAwesomeIcon size="sm" icon={["fas", "angle-down"]} />
                  </button>
                </div>
              </div>
              <div className="flex rounded-lg hover:bg-green-100 transition-color duration-200">
                <div className="w-full cursor-pointer">
                  <p className="px-1 ml-2 mt-3 w-auto text-xs text-gray-600">
                    1 . Trending
                  </p>
                  <h2 className="px-1 ml-2 font-bold text-gray-800">
                    #Microsoft363
                  </h2>
                  <p className="px-1 ml-2 mb-3 text-xs text-gray-600">
                    5,466 Views
                  </p>
                </div>
                <div className="flex-1 px-1 py-2">
                  <button className="text-center transition-color duration-300 rounded-full h-8 w-8 hover:bg-gray-200">
                    <FontAwesomeIcon size="sm" icon={["fas", "angle-down"]} />
                  </button>
                </div>
              </div>
              <div className="flex rounded-lg hover:bg-green-100 transition-color duration-200">
                <div className="w-full cursor-pointer">
                  <p className="px-1 ml-2 mt-3 w-auto text-xs text-gray-600">
                    1 . Trending
                  </p>
                  <h2 className="px-1 ml-2 font-bold text-gray-800">
                    #Microsoft363
                  </h2>
                  <p className="px-1 ml-2 mb-3 text-xs text-gray-600">
                    5,466 Views
                  </p>
                </div>
                <div className="flex-1 px-1 py-2">
                  <button className="text-center transition-color duration-300 rounded-full h-8 w-8 hover:bg-gray-200">
                    <FontAwesomeIcon size="sm" icon={["fas", "angle-down"]} />
                  </button>
                </div>
              </div>
              <div className="flex rounded-lg hover:bg-green-100 transition-color duration-200">
                <div className="w-full cursor-pointer">
                  <p className="px-1 ml-2 mt-3 w-auto text-xs text-gray-600">
                    1 . Trending
                  </p>
                  <h2 className="px-1 ml-2 font-bold text-gray-800">
                    #Microsoft363
                  </h2>
                  <p className="px-1 ml-2 mb-3 text-xs text-gray-600">
                    5,466 Views
                  </p>
                </div>
                <div className="flex-1 px-1 py-2">
                  <button className="text-center transition-color duration-300 rounded-full h-8 w-8 hover:bg-gray-200">
                    <FontAwesomeIcon size="sm" icon={["fas", "angle-down"]} />
                  </button>
                </div>
              </div>
              <div className="flex rounded-lg hover:bg-green-100 transition-color duration-200">
                <div className="w-full cursor-pointer">
                  <p className="px-1 ml-2 mt-3 w-auto text-xs text-gray-600">
                    1 . Trending
                  </p>
                  <h2 className="px-1 ml-2 font-bold text-gray-800">
                    #Microsoft363
                  </h2>
                  <p className="px-1 ml-2 mb-3 text-xs text-gray-600">
                    5,466 Views
                  </p>
                </div>
                <div className="flex-1 px-1 py-2">
                  <button className="text-center transition-color duration-300 rounded-full h-8 w-8 hover:bg-gray-200">
                    <FontAwesomeIcon size="sm" icon={["fas", "angle-down"]} />
                  </button>
                </div>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
        <div className="flow-root overflow-hidden rounded-csm bg-gray-400 mt-5">
          <div className="flex justify-around flex-wrap flex-row">
            <div className="flax-1 cursor-pointer bg-green-200 w-1/2">
              <ImgSuspense
                fallback={<Loading />}
                placeholder="linear-gradient(rgb(30, 87, 153) 0%, rgb(125, 185, 232) 100%)"
                src="https://images.unsplash.com/photo-1511268594014-0e9d3ea5c33e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="a"
                className="hover:opacity-75 transition-color duration-200 border-b-2 border-l-2 rouded-l-2"
              />
            </div>
            <div className="flax-1 cursor-pointer bg-green-200 w-1/2">
              <ImgSuspense
                fallback={<Loading />}
                placeholder="linear-gradient(rgb(30, 87, 153) 0%, rgb(125, 185, 232) 100%)"
                src="https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="b"
                className="hover:opacity-75 transition-color duration-200 border-b-2 border-l-2 rouded-l-2"
              />
            </div>
            <div className="flax-1 cursor-pointer bg-green-200 w-1/2">
              <ImgSuspense
                fallback={<Loading />}
                placeholder="linear-gradient(rgb(30, 87, 153) 0%, rgb(125, 185, 232) 100%)"
                src="https://images.unsplash.com/photo-1598442633140-6a931ed7587b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="c"
                className="hover:opacity-75 transition-color duration-200 border-b-2 border-l-2 rouded-l-2"
              />
            </div>
            <div className="flax-1 cursor-pointer bg-green-200 w-1/2">
              <ImgSuspense
                fallback={<Loading />}
                placeholder="linear-gradient(rgb(30, 87, 153) 0%, rgb(125, 185, 232) 100%)"
                src="https://images.unsplash.com/photo-1595931712126-e01d8712314b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="d"
                className="hover:opacity-75 transition-color duration-200 border-b-2 border-l-2 rouded-l-2"
              />
            </div>
            <div className="flax-1 cursor-pointer bg-green-200 w-1/2">
              <ImgSuspense
                fallback={<Loading />}
                placeholder="linear-gradient(rgb(30, 87, 153) 0%, rgb(125, 185, 232) 100%)"
                src="https://images.unsplash.com/photo-1592961169004-b6f2c0ec63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="e"
                className="hover:opacity-75 transition-color duration-200 border-b-2 border-l-2 rouded-l-2"
              />
            </div>
            <div className="flax-1 cursor-pointer bg-green-200 w-1/2">
              <ImgSuspense
                fallback={<Loading />}
                placeholder="linear-gradient(rgb(30, 87, 153) 0%, rgb(125, 185, 232) 100%)"
                src="https://images.unsplash.com/photo-1595931474671-aacb00377e46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="f"
                className="hover:opacity-75 transition-color duration-200 border-b-2 border-l-2 rouded-l-2"
              />
            </div>
          </div>
        </div>
        <div className="flow-root px-1 py-3 inline-block">
          <div className="flex-1">
            <p className="text-sm leading-6 font-medium text-gray-500">
              Terms Privacy Policy Cookies Imprint Ads info
            </p>
          </div>
          <div className="flex-2">
            <p className="text-sm leading-6 font-medium text-gray-600">
              © 2020 Badan Kepegawaian Daerah, Id.
            </p>
          </div>
          </div>
        </div>
      </StickyBox>
    </React.Fragment>
  );
};

export default Sidebar;

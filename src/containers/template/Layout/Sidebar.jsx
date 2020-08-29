import React from "react";
import StickyBox from "react-sticky-box";
import PerfectScrollbar from 'react-perfect-scrollbar'
const Sidebar = () => {
  return (
    <React.Fragment>
    <StickyBox
              bottom={false}
              offsetTop={120}
              offsetBottom={40}
              className="z-0"
            >
      <div className="max-w-full rounded-csm bg-gray-200">
        <div className="flex border-b">
          <div className="m-2">
            <h2 className="px-4 py-2 text-xl font-semibold text-gray-600">
              Postingan Populer
            </h2>
          </div>
          <div className="px-4 py-2 m-2"></div>
        </div>
        <div className="h-64">
        <PerfectScrollbar>
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-gray-800">
              #Microsoft363
            </h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Views
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2"></div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-gray-800">
              #Microsoft363
            </h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Views
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2"></div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-gray-800">
              #Microsoft363
            </h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Views
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2"></div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-gray-800">
              #Microsoft363
            </h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Views
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2"></div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-gray-800">
              #Microsoft363
            </h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Views
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2"></div>
        </div>

        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-gray-800">
              #Microsoft363
            </h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Views
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2"></div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-gray-800">
              #Microsoft363
            </h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Views
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2"></div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-gray-800">
              #Microsoft363
            </h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Views
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2"></div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-gray-800">
              #Microsoft363
            </h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Views
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2"></div>
        </div>
        </PerfectScrollbar>
</div>
      </div>
      <div className="flow-root m-6 inline-block">
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
            </StickyBox>
    </React.Fragment>
  );
};

export default Sidebar;

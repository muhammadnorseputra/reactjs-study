import React, { Component, Fragment } from 'react'
import ReactImageAppear from "react-image-appear";

export default class Office extends Component {
  render() {
    return (
      <Fragment>
        <header className="p-3 border-b border-gray sticky top-0 w-inline bg-white font-ms font-bold text-xl">
          Office
        </header>
        <div>
          <div className="">
            <div className="h-64 overflow-hidden">
              <ReactImageAppear
                src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
                className="w-full z-0"
                alt="cover-profile"
              />
            </div>
            <div className="flex justify-start -mt-8">
              <img
                src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                className="rounded-full border-solid border-white border-4 w-40 z-10 -mt-8 ml-5"
                alt="profile-pic"
              />
            </div>
            <div className="text-left px-8 pb-6 pt-2">
              <h3 className="text-black text-xl font-bold font-ms">
                Badan Kepegawaian, Pendidikan dan Pelatihan Daerah
              </h3>
              <p className="mt-2 font-sans font-light text-grey-dark">
                Hello, i'm from another the other side!
              </p>
            </div>
            <div className="flex justify-center pb-3 text-grey-dark">
              <div className="text-center mr-3 border-r pr-3">
                <h2>34</h2>
                <span>Photos</span>
              </div>
              <div className="text-center">
                <h2>42</h2>
                <span>Friends</span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

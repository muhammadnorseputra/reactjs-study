import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/img/logo/logo.png'

// sticky box 
import StickyBox from "react-sticky-box";

// Tooltip
import Tippy from '@tippyjs/react';
import {animateFill} from 'tippy.js';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';

function Navbar() {
  return (
    <React.Fragment>
          <StickyBox
              bottom={false}
              offsetTop={0}
              offsetBottom={0}
              className="z-20"
            >
      <div className="w-full flex flex-row gap-6 items-center justify-between bg-white border-b">
        <div className="ml-10 pl-5 text-lg font-bold text-gray-900 hidden md:flex">
          BKPPD Balangan
        </div>
        
        <Link className="inline" to="/">
         <img src={logo} alt="Logo Balangan" />
        </Link>

        <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
          <i className="fas fa-bars"></i>
        </div>
        <div className="flex flex-row-reverse mr-8 hidden md:flex">
        <Tippy interactive={true} animateFill={true} plugins={animateFill} animation="shift-away" content="Open console to manage this app on browser" arrow={false}>
          <button className="text-gray-800 text-center bg-gray-200 px-4 py-2 m-2 rounded-lg text-sm hover:bg-gray-400">
            Open Console
          </button>
        </Tippy>
        </div>
      </div>
      
            </StickyBox>
    </React.Fragment>
  );
}

export default Navbar;

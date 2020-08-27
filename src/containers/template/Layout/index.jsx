import React from 'react';
import "../../../assets/styles/main.css";
import { BrowserRouter as Router } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Menu from "../../../components/molecules/Menu";
import Search from "../../../components/molecules/Search";
import Content from './Content';
import Sidebar from './Sidebar';

const Layout = () => {
  
  return (
    <Router>
      <React.Fragment>

              <div className="flex">
                <div className="w-2/5 pl-10">
                  <StickyBox bottom={false} offsetTop={20} offsetBottom={20}>
                    <Menu />
                  </StickyBox>
                </div>
                <div className="w-4/5 border-r border-l border-gray">
                  <Content />
                </div>
                <div className="w-3/5 pr-10">
                  <StickyBox
                    bottom={false}
                    offsetTop={0}
                    offsetBottom={0}
                    className="z-10"
                  >
                    <Search />
                  </StickyBox>

                  <StickyBox
                    bottom={false}
                    offsetTop={70}
                    offsetBottom={90}
                    className="z-0"
                  >
                    <Sidebar />
                  </StickyBox>
                </div>
              </div>
      </React.Fragment>
    </Router>
  );
}

export default Layout;
import React from 'react';
import "../../../assets/styles/main.css";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "../../../components/molecules/Search";
import Menu from "../../../components/molecules/Menu";
import Content from './Content';
import Sidebar from './Sidebar';
import Navbar from '../../../components/molecules/Navbar';
import GlobalProvider from '../../../config/Context'

class Layout extends React.Component {
  render() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="flex flex-row gap-0 space-x-8">
          <div className="w-2/6 pl-5">
            <Menu />
          </div>
          <div className="w-4/6">
            <Content />
          </div>
          <div className="w-3/6 pr-10">
            <Search />
            <Sidebar />
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
  }
}

export default GlobalProvider(Layout);
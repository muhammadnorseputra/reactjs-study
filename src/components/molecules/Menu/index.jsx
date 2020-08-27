import React from 'react';
import logo from '../../../assets/img/logo/logo.png'
import { Link } from "react-router-dom";
import MenuItem from '../../atoms/MenuItems';

const Menu = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className="ml-4 mt-5">
          <li>
            <Link className="inline" to="/">
              <img src={logo} className="mb-3 ml-4" alt="Logo Balangan" />
            </Link>
          </li>
          <MenuItem title="Home" icon="home" path="/" />
          <MenuItem title="Office" icon="building" path="/office" />
          <MenuItem title="Explore" icon="compass" path="/explore" />
          <MenuItem title="Information Cpns" icon="user" path="/cpns" />
          <MenuItem title="Notification" icon="bell" path="/notification" />
        </ul>
      </nav>
      <div className="mt-5 flex justify-center">
        <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full block">
          Registartion / Login
        </button>
      </div>
    </React.Fragment>
  );
}


export default Menu;
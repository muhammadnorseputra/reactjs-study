import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  let typeIcon = props.title === "Home" ? "fas" : "far";
  return (
    <li>
      <NavLink
        className="group block py-4"
        exact
        to={props.path}
        activeClassName="text-green-400"
      >
        <span className="group-hover:bg-green-100 group-hover:text-green-400 py-3 pr-8 pl-4 rounded-full font-ms text-lg font-bold transition-color duration-300 ease-in-out">
          <FontAwesomeIcon
            className="md:mr-5"
            size="lg"
            icon={[typeIcon, props.icon]}
          />
          {props.title}
        </span>
      </NavLink>
    </li>
  );
}

export default MenuItem;

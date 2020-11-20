import React from 'react'
import { FaHome, FaAddressCard, FaAddressBook } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
         <ul>
        <li>
          <a><FaAddressBook /><Link to="/Account">Account</Link></a>
        </li>
        <li>
          <a><FiHelpCircle /><Link to="/Help">Help</Link></a>
        </li>
        <li>
          <a><FaAddressCard /><Link to="/About">About</Link></a>
        </li>
        <li>
          <a><FaHome /><Link to="/">Home</Link></a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar

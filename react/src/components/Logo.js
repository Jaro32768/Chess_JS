import React from 'react';
import SiteLogo from '../images/logo.jpg';
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to='/'><img className='logo' src={SiteLogo} alt='logo' /></Link>
  )
}

import './logo.css'
import Logo from '../../assets/imgs/VitorGrisolia2.jpeg'
import React from 'react'
import {Link} from 'react-router-dom'

export default props=>
<aside className="logo">
    <Link to="/" className="logo">
        <img src={Logo} alt="Logo" />
    </Link>
</aside>
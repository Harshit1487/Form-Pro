import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom';

import { RootContext } from "../context/RootContext";
import { Nav } from 'react-bootstrap';

const Header = () => {
  const {login, userDetail, isLoggedIn, user} = useContext(RootContext);
  const [userData, setUserData] = useState(true);
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  if(userData && user){
    setUsername(user.username)
    setUserData(false);
  }

  const handleLogin = () => {
    navigate("/signin")
  }

  const handleRegister = () => {
    navigate("/signup")
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">Form Pro</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="createform" className="nav-link active" aria-current="page">Create Form</Link>

          {/* <a className="nav-link active" aria-current="page" href="#">Create Form</a> */}
        </li>

        <li className="nav-item">
        <Link to="showforms" className="nav-link active" aria-current="page">Show Form</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
        {isLoggedIn ? (
          <>
          {/* <p>{userDetail.userName}</p> */}
          <h5 className='mt-2 me-3' style={{"color":"white"}}>{username.toUpperCase()}</h5>
          <NavLink className="btn btn-outline-success" to="/logout">Logout</NavLink>
          {/* <button className="btn btn-outline-success" type="submit"><NavLink to="/logout">Logout</NavLink> </button> */}
          </>
        ) : (

          <>
          <button onClick={handleRegister} className="btn btn-outline-success me-2" type="submit">Register</button>
          <button onClick={handleLogin} className="btn btn-outline-success" type="submit">Login</button>
          </>
        ) }
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
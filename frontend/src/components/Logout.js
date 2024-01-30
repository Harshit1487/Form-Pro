import React, { useContext, useEffect } from 'react'
import { Navigate } from "react-router-dom"

import { RootContext } from "../context/RootContext";

const Logout = () => {
    const { LogoutUser } = useContext(RootContext)
    useEffect(() => {
        LogoutUser();
    }, [LogoutUser])
  return (
    <Navigate to="/signin" />
    // <div>Logout</div>
  )
}

export default Logout
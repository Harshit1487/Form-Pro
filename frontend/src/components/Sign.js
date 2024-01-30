import React, { useContext } from 'react'

import { RootContext } from "../context/RootContext";

const Sign = () => {
    const {userDetail, setUserDetail} = useContext(RootContext)

    const handleChange = (e) => {
        setUserDetail({ ...userDetail, [e.target.name] : e.target.value})
    }
    console.log("sign page")

  return (
    <div>
        <form>
        <div class="mb-3">
    <label for="userName" class="form-label">Username</label>
    <input onChange={(e) => handleChange(e)} type="text" class="form-control" id="userName" name="username" />
    
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input onChange={(e) => handleChange(e)} type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input onChange={(e) => handleChange(e)} type="password" class="form-control" id="password" name="password"/>
  </div>
  <div class="mb-3">
    <label for="confirmpassword" class="form-label">Confirm Password</label>
    <input onChange={(e) => handleChange(e)} type="password" class="form-control" id="confirmpassword" name="confirmpassword" />
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1" name>Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Sign
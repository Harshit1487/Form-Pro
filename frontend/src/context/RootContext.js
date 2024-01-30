import { createContext, useEffect, useState } from "react";

export const RootContext = createContext();

const RootProvider = ({children}) => {
    
    const [forms, setForms] = useState({
      formTitle:"",
      formDescription:"",
      formQuestions:[],
    })

    const [formUserDetail, setFormUserDetail] = useState({
      username:"",
      email:"",
      formData:[]
    })

    const [login, setLogin] = useState(false)

    const [userDetail, setUserDetail] = useState({
      username:"",
      email:"",
      phone:"",
      password:""
    })
    const [user, setUser] = useState("")
    const [token, setToken] = useState(localStorage.getItem("token"))
    const storeTokenInLS = (serverToken) => {
      return localStorage.setItem('token', serverToken);
    }
    let isLoggedIn = !! token;

    const LogoutUser = () => {
      setToken("");
      return localStorage.removeItem("token");
    }
    //jwt authentication - get currently loggedin user data
    const userAuthentication = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/user",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if(res.ok){
          const data = await res.json();
          console.log("user data", data.userData);
          setUser(data.userData)

          setFormUserDetail({...formUserDetail, 
            email:data.userData.email,
            username:data.userData.username
          })
        }
      } catch (error) {
        console.error("Error fetching user data")
      }
    }

    //get form data if any form is already available 

    const getFormData = async () => {
        try {

          const res = await fetch("http://localhost:5000/api/data/formdata",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email:user.email})
          });
          
          if(res.ok){
            const formData = await res.json();
            console.log("get form data from db",formData.msg)
            setFormUserDetail({...formUserDetail, formData:formData.msg.formData})
          }
        } catch (error) {
          console.error("Error fetching form data", error)
        }
    }

    useEffect(() => {
      userAuthentication();
    }, [])

    useEffect(() => {
      if(user.email){
        getFormData();
      }
    },[user])

  return (
    <>
        <RootContext.Provider value={{login, setLogin, userDetail, setUserDetail, storeTokenInLS, LogoutUser, isLoggedIn, user, forms, setForms, formUserDetail, setFormUserDetail}}>
            {children}
        </RootContext.Provider>
    </>
  )
}

export default RootProvider
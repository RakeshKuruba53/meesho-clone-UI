import React, { createContext, useContext, useState , useEffect} from 'react'

const authContext=createContext({})

const AuthProvider = ({child}) => {
    
    const [auth,setAuth]=useState({
        userId:"",
        username:"",
        role:"CUSTOMER",
        isAuthenticated:false,
        accessExpiration:"",
        refreshExpiration:""
    })
             useEffect(()=>{
       console.log("auth state updated",auth);
                    },[auth])
  return (
   <authContext.Provider value={{auth,setAuth}} >
          {child}
   </authContext.Provider>
  )
}


export default AuthProvider
export const useAuth=()=>useContext(authContext);
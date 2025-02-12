
import { Outlet,  Navigate } from "react-router-dom";
import Cookies from "js-cookie";


export const AuthRoute =() =>{
    const Token = Cookies.get('token')

   if(!Token){
    return  <Navigate to='/'  />

   }
  return <Outlet/>

}
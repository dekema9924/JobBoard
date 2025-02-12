
import { useSelector } from "react-redux";
import { Outlet,  Navigate } from "react-router-dom";
import Cookies from "js-cookie";


export const AuthRoute =() =>{
    const Token = Cookies.get('token')
    // const user = useSelector((state:any)=>state.user.value)
    console.log(Token)

   if(!Token){
    return  <Navigate to='/'  />

   }
  return <Outlet/>

}
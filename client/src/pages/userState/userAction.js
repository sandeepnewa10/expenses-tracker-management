
import {loginUser} from '../../helpers/axiosHelper'
import { toast } from "react-toastify";
import { setUser } from './userSlice';

export const loginAction = (obj) => async dispatch =>{
    //first call axios and get data from the server
    const { status, message, user } = await loginUser(obj);
    toast[status](message);

    if (status === "success") {
        window.sessionStorage.setItem("user", JSON.stringify(user));
       dispatch(setUser(user))
        // setLogedIn(true);
        // navigate("/dashboard");
      }

    // dispatch the incoming data to the slice


}

export const userLogoutAction = () =>(dispatch) =>{
    dispatch(setUser({}))
    window.sessionStorage.removeItem("user")
}
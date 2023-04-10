
import jwt_decode from "jwt-decode";
export const jwtDecode = (token:string)=>{
    return jwt_decode(token);
}


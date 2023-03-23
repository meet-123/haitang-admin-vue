import axios from '../tools/Axios';

import type {LoginDataType,tokenResType,UserInfoType} from '../types/user_typs';




export  function  LoginApi(data:LoginDataType){
   
   return  axios.get<string>('/api/abc');
}
export function getUserInfoApi(data:tokenResType){
   return axios.post<UserInfoType>('/api/user_info',data)
}
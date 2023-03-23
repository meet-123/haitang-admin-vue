import axios from '../tools/Axios';

import type {LoginDataType,tokenResType} from '../types/user_typs';




export  function  LoginApi(data:LoginDataType){
   
   return  axios.get<string>('/api/abc');
}
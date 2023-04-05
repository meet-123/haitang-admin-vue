import axios from '../tools/Axios';
import type {LoginDataType,tokenResType,UserInfoType,ActricleType} from '../types/user_typs';
export  function  LoginApi(data:LoginDataType){
   
   return  axios.post<UserInfoType>('/api/ucenter/Login/register',data);
}
export function getUserInfoApi(data:tokenResType){
   return axios.post<UserInfoType>('/api/user_info',data)
}

//文章保存
export function saveArticleApi(data:ActricleType){
   return  axios.post<UserInfoType>('/api/ucenter/Article/save',data);
}

//获取文章
export function getArticleByIdApi(id:Number | String){
   return  axios.get<UserInfoType>('/api/public/getOne?id='+id);
}
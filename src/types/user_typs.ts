import { type } from "os";

export interface LoginDataType {
    userName:string,
    password:string,
    nickName?:string
}
export interface tokenResType{
    token:string,
}
export interface UserInfoType{
    userName: string;
	nickName: string;
	id: number;
	createTime?: string;
	token: string;
    avatar?:string
}
export type LoginForm = {
    userName:string,
    password:string,
    nickName?:string
  };


export  type ActricleType={
    title:string
    content:string,
    description:string,
    type:string;
    id?:Number,
    publish_time?:string
}



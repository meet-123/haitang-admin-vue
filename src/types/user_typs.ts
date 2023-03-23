export interface LoginDataType {
    name:string,
    pwd:string,
}
export interface tokenResType{
    token:string,
}
export interface UserInfoType{
    id:string,
    name:string,
    avatar?:string,
}
export type LoginForm = {
    name: string;
    pwd: string;
  };

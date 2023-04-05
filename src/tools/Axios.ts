import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'; 
import { ElMessage } from 'element-plus';
// const baseURL  = 'https://www.baidu.com';
const baseURL  = '/';


const instance = axios.create({
    baseURL,
  });

instance.interceptors.request.use((value)=> {
    value.timeout = 1000;
    value.headers.token = localStorage.getItem('token') || ''
    return value
});


instance.interceptors.response.use((value:AxiosResponse)=> {

    const {code,success,data } = value.data;
     switch (code) {
        case 200 :
            {
                return value.data 
                break;
            }
            case 403:
            {
                ElMessage.error(value.data.data);
            }
        case 404 :
            {
                // 资源不存在
            }
        default:
            break;
    }
   
},err=>{
    ElMessage.error('服务器发生错误，请刷新后重新提交');
   
});
type responseDataType<T> = {
    code:Number,
    msg:string,
    data:T
}
const http = {
        get<T=any>(url:string,config?:AxiosRequestConfig): Promise<responseDataType<T>>{
            return instance.get(url,config);
        },
        post<T=any>(url:string,data:object,config?:AxiosRequestConfig):Promise<responseDataType<T>>{
            return instance.post(url,data,config);
        }
    }

export default http
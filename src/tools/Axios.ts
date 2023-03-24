import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'; 
import { ElMessage } from 'element-plus';
// const baseURL  = 'https://www.baidu.com';
const baseURL  = '/';


const instance = axios.create({
    baseURL,
    // headers: {"X-Requested-With": "XMLHttpRequest"},
  });

instance.interceptors.request.use((value)=> {
    value.timeout = 1000;
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
        case 500 :
            {

                
                ElMessage.error('请求失败');
            }
        case 404 :
            {
                // 资源不存在
            }
        default:
            break;
    }
   
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
import { ref, computed,reactive } from 'vue'
import { defineStore } from 'pinia'
import { LoginApi,getUserInfoApi } from '@/api'
import router from '@/router';
import type {LoginForm,UserInfoType} from "@/types/user_typs"


export const useUserStore = defineStore('user', () => {
    
    const userInfo = reactive<UserInfoType>({
            userName: '',
            nickName: '',
            id: 0,
            token: '',
    })
    const token = ref('')
    const  doLogin = async (form:LoginForm)=>{
       let loginData = await LoginApi(form);
      
       if(loginData.code == 200){
        token.value = loginData.data.token
        localStorage.setItem('token',token.value)
        userInfo.userName = loginData.data.userName
        userInfo.nickName = loginData.data.nickName
        userInfo.id = loginData.data.id
        userInfo.token = loginData.data.token

        router.push('/disabled')
       }
   }
   const logout = async ()=>{
        token.value = '';
        localStorage.setItem('token' , '');
        router.push('/')
   }

   return {
    userInfo,
    token,
    doLogin,
    logout
   }
},{
    persist:{
        enabled:true,
        strategies:[
            {
                key:'userInfo',
                storage:localStorage,
                // paths:['token','data']
            }
        ]
    }
})



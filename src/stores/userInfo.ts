import { ref, computed,reactive } from 'vue'
import { defineStore } from 'pinia'
import { LoginApi,getUserInfoApi } from '@/api'
import router from '@/router';
import type {LoginForm,UserInfoType} from "@/types/user_typs"

import { jwtDecode } from '@/tools/jwt';



export const useUserStore = defineStore('user', () => {
    
    let userInfo = reactive<UserInfoType>({
            userName: '',
            nickName: '',
            id: 0,
            token: '',
    })
    const token = ref('')
    const  doLogin = async (form:LoginForm)=>{
       let loginData = await LoginApi(form);
        console.log(12312);
        
       if(loginData.code == 200){
        const info = reactive((jwtDecode(loginData.data.token) as any ).data as UserInfoType)

        token.value = loginData.data.token
        localStorage.setItem('token',token.value)
        userInfo.userName = info.userName
        userInfo.nickName = info.nickName
        userInfo.id = info.id
        userInfo.token = info.token
        
        
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



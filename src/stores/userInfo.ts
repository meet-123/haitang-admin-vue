import { ref, computed,reactive } from 'vue'
import { defineStore } from 'pinia'
import { LoginApi } from '@/api'
import router from '@/router';
import type {LoginForm,UserInfoType} from "@/types/user_typs"


export const useUserStore = defineStore('user', () => {
    const userInfo = reactive<UserInfoType>({
        id:'',
        name:'',
    })
    const token = ref('')
    const  doLogin = async (form:LoginForm)=>{
       let data = await LoginApi(form);
       if(data.code == 200){
        localStorage.setItem('token',data.data)
        token.value = data.data
        router.push('/disabled')
       }
   }


   return {
    userInfo,
    token,
    doLogin
   }
})



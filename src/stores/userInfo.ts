import { ref, computed,reactive } from 'vue'
import { defineStore } from 'pinia'
import { LoginApi,getUserInfoApi } from '@/api'
import router from '@/router';
import type {LoginForm,UserInfoType} from "@/types/user_typs"


export const useUserStore = defineStore('user', () => {
    const userInfo = reactive<UserInfoType>({
        id:'',
        name:'admin',
        avatar:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    })
    const token = ref('')
    const  doLogin = async (form:LoginForm)=>{
       let data = await LoginApi(form);
       if(data.code == 200){
        localStorage.setItem('token',data.data)
        token.value = data.data
        let u = await getUserInfoApi({'token':token.value})
        
        userInfo.id = u.data.id
        userInfo.name =u.data.name
        userInfo.avatar = u.data.avatar || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
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
                paths:['token','userInfo']
            }
        ]
    }
})



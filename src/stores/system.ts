import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { useRoute } from 'vue-router'

export const useSysStore = defineStore('sys', () => {
    const pathArr = ref<string[]>([]);

    const setPathArr = (arr:string)=>{
        pathArr.value = arr.split('/')
    }
    return { pathArr,setPathArr}
})

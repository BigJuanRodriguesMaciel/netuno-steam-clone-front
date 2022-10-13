import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '@/components/LoginInicial/LoginSteam.vue'
import Cadastro from '@/components/Cadastro/CadastroSteam.vue'


const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/cadastro',
        components: Cadastro,
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
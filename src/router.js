import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/components/LoginInicial/LoginSteam.vue'
import Cadastro from '@/components/Cadastro/CadastroSteam.vue'
import Library from '@/views/PageLibrary.vue'
import Store from '@/views/PageStore.vue'


const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/cadastro',
        component: Cadastro,
    },
    {
        path: '/library',
        component: Library,
    },
    {
        path: '/store',
        component: Store,
        meta: { shoeHeader: true, showFooter: true}
    },


]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
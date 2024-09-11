import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '/src/components/FirstPage.vue'

export default createRouter({
    routes: [
        {path: '/', component: FirstPage}
    ],
    history: createWebHistory()
})

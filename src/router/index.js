import { createMemoryHistory, createRouter } from 'vue-router'

import Projects from '../pages/Projects/[slug].vue'
import About from '../pages/About.vue'
import Users from '../pages/Users/[:id].vue'

const routes = [
    // {
    //     path: "/",
    //     name: 'home',
    //     component: Home
    // },
    {
        path: "/about",
        name: 'about',
        component: About
    },
    {
        path: "/projects/:slug",
        name: 'projects',
        component: Projects
    },
    {
        path: "/users/:id",
        name: 'users',
        component: Users
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router

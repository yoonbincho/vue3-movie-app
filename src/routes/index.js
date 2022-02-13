import { createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

export default createRouter({
    // Hash 모드 /#/
    history: createWebHashHistory(),
    // 페이지
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/movie/:id',
            component: Movie
        },
        {
            path: '/about',
            component: About
        }

    ]

})
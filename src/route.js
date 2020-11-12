import Vue from 'vue';
import  Router from 'vue-router'
import  MoviesList from './components/MovieList.vue'
import  MovieDetail from '@/components/movieDetails'


Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            name:'Movies list',
            component: MoviesList

        },
        {
            path: '/movie/:id',
            name:'Movies Detail',
            component: MovieDetail

        }
    ]
})
<template>
    <ul>
        <li v-for="movie in movies" :key="movie">
            <Movie :movie="movie"/>

        </li>
    </ul>
</template>
<script>
import Movie from './Movie.vue'

export default {
    name:"MovieList",
    data(){
        return {
            movies:[]
        }
    },
    beforeCreate: function(){
        console.log('creating')

    },
    created: function(){
        this.fetchData()

    },
    beforeMount: function(){
        console.log('mounting')
    },
    mounted(){
        console.log('mounted')
    },
    methods: {
        fetchData:  async function(){
           try{
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7227740efbb39f6148be78c6d94fda15')
            const movies = await res.json()
            this.movies = movies.results
           }
           catch (e){
               console.log(e)
           }
        }
    },
    components:{
        Movie
    }
    
}
</script>

<style scoped>
ul{
    display:grid;
    list-style:none;
    padding: 1rem;
    margin:0;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(6, 1fr);
}

</style>
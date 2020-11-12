<template>
    <div class="movie-wrapper" v-bind:style="styles">
        <h1>
            {{movie.title}}
            
        </h1>
         <h3>Release Date: {{movie.release_date}}</h3>
         <p>
             {{movie.overview}}
         </p>
    </div>
</template>

<script>
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280"
export default {

     data(){
        return {
            movie:{}
        }
    },
    created: function(){
        this.fetchData()

    },
    computed: {
        styles() {
            return {
                background: `url(${BACKDROP_PATH}/${this.movie.backdrop_path}) no-repeat`

            }
        }
        

    },
    methods: {
        fetchData:  async function(){
           try{
            const res = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=7227740efbb39f6148be78c6d94fda15`)
            const movie = await res.json()
            this.movie = movie
           }
           catch (e){
               console.log(e)
           }
        }
    }
    
}
</script>

<style scoped>

</style>
<template>
    <header>
        <h1>{{ title }}</h1>
        
    </header>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:String
    },
    data() {
        return {
            name:'scot'
        };
    },
    computed:{
        newTitle: function(){
            console.log(this);
            return 'New Title'
        },
        combine: function(){
            return `${this.name}  ${this.title} `
        }
    }
   
}
</script>

<style scoped>

    header{
        background-color: #111;
        padding:20px;
        color:white
    }
    h1{
        margin:0px
    }

</style>
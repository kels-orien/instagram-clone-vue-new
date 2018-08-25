<template>
<section class="app">
    <headers></headers>
    <section class="main">
       <h4 v-if="loading">Loading...</h4>
        <post
         v-for="post in allPosts"
         :key="post.id"
         :post="post">
         </post>
    </section>
   
     </section> 
</template>

<script> 
import Post from './Post';
import  {ALL_POSTS_QUERY} from '../constants/graphql';
import {GC_USER_ID} from '../constants/settings'
import Headers from './Headers';

export default {
    name: 'Posts',
    data () {
        return {
            loading: 0,
        }
    },
     created () {
        if (localStorage.getItem(GC_USER_ID)=== null)
        {
            this.$router.push({path: '/login'})
        }
    },
    components: {
        Post,
        Headers
    },
    apollo: {
        allPosts : {
             query:ALL_POSTS_QUERY
        }
       
    }
}
</script>




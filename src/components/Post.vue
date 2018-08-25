<template>
      <article class="Post">
        <header>
          <div class="Post__user">
            <div class="Post__user--avatar">
              <img :src="post.postedBy.image" :alt="post.postedBy.username" />
            </div>
            <div class="Post__user--username">
              <span>{{post.postedBy.username}}</span> <div>
    </div>
            </div>
          </div>
        </header>
        <div class="Post__image">
          <div class="Post__image--bg">
            <img :alt="post.text" :src="post.image" />
          </div>
        </div>
        <section class="Post__icon">
          <a v-if="!likeState" class="Post__icon--heart" @click="likePost()"  role="button"><span class="wrap iconHeartOpen ">Like</span></a>
          <a v-else class="Post__icon--heart"  @click="unlikePost()" role="button"><span class="wrap iconHeart">Like</span></a>
          <a class="Post__icon--comment"  @click="setCommentFocus()" role="button"><span class="wrap iconComment">Comment</span></a>
          <a  v-if="!saveState" class="Post__icon--save" @click="savePost()"  role="button" aria-disabled="false"><span class="wrap iconSaveOpen">Save</span></a>
          <a v-else class="Post__icon--save" @click="savePost()"  role="button" aria-disabled="false"><span class="wrap iconSave">Save</span></a>
        </section>
        <div v-if="post.likes.length > 0">
          <section class="Post__likes">
              <div class="Post__likes--like"><a class="show"><span>{{ likes }}</span> likes</a></div>
          </section>
          </div>
        <div v-if="post.comments.length > 0">
           <comment 
            v-for="comment in post.comments"
            :key="comment.id"
            :comment="comment">
        </comment>
        </div>
        <CreateComment :postId="post.id" :userId="post.postedBy.id"  ref="commentInput">
        </CreateComment>
      </article>
</template>

<script>
import {ALL_POSTS_QUERY, CREATE_LIKE_MUTATION, DELETE_LIKE_MUTATION } from '../constants/graphql'
import { GC_USER_ID} from '../constants/settings'
import CreateComment from './CreateComment';
import Comment from './Comment';
export default {
    name: 'Post',
    props: ['post'],
    data () {
       return {
         likeState:false,
         saveState:false,
         focus:false
       }
    },
     created () {
        if (this.post.likes.length > 0) {
           this.likeState = true;
        }
     },
     computed: {
      likes () {
        const likes =  this.post.likes.length;
        return likes
      }
    },
    components: {
        CreateComment,
        Comment
    },
    methods: {
      setCommentFocus () {
           this.$refs.commentInput.focus()
      },
      likePost () {
            this.likeState = true; 
            const postId = this.post.id
            const userId = this.post.postedBy.id

            this.$apollo.mutate({
            mutation: CREATE_LIKE_MUTATION,
            variables: {
                postId,
                userId
            },
            update: (store, {data: { createLike}}) => {
                this.updateStoreAfterLike(store, createLike, postId)
            }
         })
      },
      unlikePost () {
        this.likeState = false;
        if (this.post.likes.length > 0) {
            const userId = localStorage.getItem(GC_USER_ID);
            const userlike = this.post.likes.find(likes => likes.user.id === userId)
            console.log("like: ", userlike)
            const likeId = userlike.id
            this.$apollo.mutate({
            mutation: DELETE_LIKE_MUTATION,
            variables: {
                likeId
            },
            update: (store) => {
                this.updateStoreAfterDelete(store, likeId)
            }
         })
        }
      },
      updateStoreAfterLike(store, createLike, postId) {
          const data = store.readQuery({query: ALL_POSTS_QUERY})
            const likedPost = data.allPosts.find(post => post.id === postId)
            console.log("likedPost: ", likedPost)
            console.log("createLike: ", createLike)
            likedPost.likes.push(createLike)
            store.writeQuery({ query: ALL_POSTS_QUERY, data })
        },
        updateStoreAfterDelete(store, likeId) {
          const data = store.readQuery({query: ALL_POSTS_QUERY})
          console.log("Like ID: ", likeId)
          const post = data.allPosts.find(post => post.id === this.post.id)
          
          const removelike = post.likes.filter(like => like.id === likeId);
          console.log("likes removed: " ,removelike);
          post.likes.splice(post.likes.indexOf(removelike), 1)
          console.log("post after splice: ", post)
          store.writeQuery({ query: ALL_POSTS_QUERY, data })
        },
      savePost () {
        //this.saveState === false ? true : false;
        if (this.saveState === false) {
          this.saveState = true;
        }
        else {
          this.saveState = false;
        }
      }
    }
   
}
</script>


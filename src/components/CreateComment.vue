<template>
    <div class="Post__create">
         <section class="Post__create-comment">
        <div class="Post__create-comment-input">
            <textarea aria-label="Add a comment…" ref="input" placeholder="Add a comment…" @keydown.enter.prevent="saveComment"  v-model="text" class="Post__create-comment--field">
            </textarea>
            </div>
    </section >
    </div> 
</template>


<script>
import { ALL_POSTS_QUERY, CREATE_COMMENT_MUTATION } from '../constants/graphql'
import { GC_USER_ID} from '../constants/settings'

export default {
    name: 'CreateComment',
    props: ['postId', 'userId'],
    data () {
        return {
            loading: 0,
            text:""
        }
    },
    methods: {
        focus: function () {
            this.$refs.input.focus()
    },
      saveComment () {
        console.log("comment", this.text);
        console.log("comment", this.postId);
         console.log("comment", this.userId);
        const {text} = this.$data
        const userId = this.userId
        const postId = this.postId
        this.$apollo.mutate({
            mutation: CREATE_COMMENT_MUTATION,
            variables: {
                text,
                postId,
                userId
            },
            update: (store, {data: { createComment}}) => {
                this.updateStoreAfterComment(store, createComment, postId)
            }
         })
        this.text = "";
      },
      updateStoreAfterComment(store, createComment, postId) {
          const data = store.readQuery({query: ALL_POSTS_QUERY})
            const commentedPost = data.allPosts.find(post => post.id === postId)
            commentedPost.comments.push(createComment)
            store.writeQuery({ query: ALL_POSTS_QUERY, data })
        }
    }
}
</script>

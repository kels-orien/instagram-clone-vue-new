<template>
<section class="Login">
   <main class="Login__form" role="main" >
            <h1 class="Login__form--logo  LoggedOutWordmark">Instagram</h1>
         <div class ="Login__form--input">
            <input  class ="Login__form--input-field"  v-model="email" type="text" required/>
            <span class="floating-label">Email</span> 
         </div>
         <div class ="Login__form--input">
            <input  class ="Login__form--input-field" v-model="password" type="password" required/>
            <span class="floating-label">Password</span> 
          </div>
            <div class ="Login__form--button">
                  <span></span>
                  <button class="Login__form--button-1" @click="login()">Log in</button>
            </div>
   </main>
</section>
</template>

<script>
 import {SIGNIN_USER_MUTATION } from '../constants/graphql'
 import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants/settings'
export default {
    name:"Login",
    data () {
        return {
            email:"",
            password:""
        }
    },
    methods: {
        login() {
            const { email, password } = this.$data
            this.$apollo.mutate({
            mutation: SIGNIN_USER_MUTATION,
            variables: {
              email,
              password
            }
          }).then((result) => {
            const id = result.data.signinUser.user.id
            const token = result.data.signinUser.token
            this.saveUserData(id, token)
            this.$router.push({path: '/'})
          }).catch((error) => {
            alert(error)
          })
        },
        saveUserData (id, token) {
            localStorage.setItem(GC_USER_ID, id)
            localStorage.setItem(GC_AUTH_TOKEN, token)
            this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
        }
    }
}
</script>


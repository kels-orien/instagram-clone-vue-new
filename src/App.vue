<template>
  <div id="app">
 <router-view></router-view>
    </div>  
</template>

<script>
import Headers from './components/Headers'
import Posts from './components/Posts'
import Login from './components/Login'
export default {
  name: 'App',
  components: {
      Headers,
      Posts,
      Login
    }
}
</script>
<style>
* {
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
  }
  
  
body {
    margin: 0;
    padding: 0;
  }

  body, button, input, textarea {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 12px;
    background-color: #fafafa;
}
.Login {
    min-height: 100%;
    overflow: hidden;
    box-sizing:border-box;
    padding-top: 150px;
    padding-bottom:150px;
    width: 100%;
}
.Login__form {
    background-color: #ffffff;
    margin: 0 auto;
    width: 350px;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    padding: 10px 0;
}
.Login__form--input {
    height: 40px;
    margin: 0 40px 6px;
}

.Login__form--input-field {
    margin-bottom:20px;
    border-radius: 4px;   
    font-size: 16px;
    border: 1px solid #efefef;
    background: #fafafa;
    min-height: 100%;
    -webkit-appearance: none;
    padding-left: 8px;
    width: 100%;
}

.floating-label {
    position: absolute;
    pointer-events: none;
    left: 20px;
    top: 12px;
    transition: 0.2s ease all;
    color:#999;
  }

input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label{
  top: 1px;
  bottom:4px;
  left: 20px;
  font-size: 10px;
  opacity: 1;
}

.Login__form--button {
    margin: 8px 40px;
}

.Login__form--button-1 {
    -webkit-appearance: none;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    outline: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: 100%; 
    background: #3897f0;
    border-color: #3897f0;
    color: #fff; 
}

.Login__form--logo {
    display: block;
    overflow: hidden;
    text-indent: 110%;
    white-space: nowrap;
       margin: 22px auto 12px;
}
.LoggedOutWordmark  {
    background-repeat: no-repeat;
    background-position: -99px -264px; 
    width: 174px;
    height: 51px;
}

input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background:#999 !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
}

article, div, footer, header, main, nav, section {
    /* -webkit-box-align: stretch; */
    /* -webkit-align-items: stretch; */
    -ms-flex-align: stretch;
    align-items: stretch;
    border: 0 solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-box-orient: vertical;
    /* -webkit-box-direction: normal; */
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    /* flex-direction: column; */
    /* -webkit-flex-shrink: 0; */
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
}
.app {
  background: #fafafaa8;
  min-height: 100vh;
  min-width: 100vh;
}

.main {
  width: 50%;
  margin: 0 auto;
  padding-top: 120px;
}
textarea {
    -webkit-appearance: textarea;
    background-color: white;
    -webkit-rtl-ordering: logical;
    flex-direction: column;
    resize: auto;
    cursor: text;
    white-space: pre-wrap;
    word-wrap: break-word;
    border-width: 1px;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    padding: 2px;
}
a, a:visited {
    color: #003569;
    text-decoration: none;
}
.Nav {
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  -webkit-transition: height 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
  height: 77px;
}


.Nav-menus {
  display: flex;
  flex-direction: row;
  height: 77px;
  /* justify-content: center; */
  width: 70%;
  margin: 0 auto;
  padding: 26px 40px;
}


.Nav-brand-logo {
  display: block;
  background-position: -98px -317px;
  background-repeat: no-repeat;
  height: 35px;
  width: 176px;
  text-indent: -20000%;
}
 
.Post {
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin-bottom: 60px;
}

.Post__user {
  display: flex;
  padding: 16px;
  align-items: center;
}
.Post__user--avatar {
  width: 30px;
  height: 30px;
}

.Post__user--avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.Post__user--username {
  margin-left: 12px;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
}

.Post__image--bg {
  background-color: #efefef;
}

.Post__image img {
  display: block;
  width: 100%;
  max-height: 900px;
}

.Post-comment {
  padding: 16px 16px;
}
.Post-comment strong {
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
}

.wrap {
      display: block;
      overflow: hidden;
      text-indent: 110%;
      white-space: nowrap;
  }


.Post__icon {
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
     margin-top: 4px;
     padding-left: 8px;
}

.Post__icon--heart{
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 8px;
    display: inline-block;
}

.Post__icon--comment{
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 8px;
    display: inline-block;
}


.Post__icon--save {
    background-color: transparent;
    border: 0;
    padding: 8px;
    margin-left: auto;
    float: right;
}


.Post__likes {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-bottom: 8px;
}

.Post__likes--like {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    display: block;
}
.Post__create {
      padding: 0 16px;
      padding-top: 0px;
      padding-right: 16px;
      padding-bottom: 0px;
      padding-left: 16px;
  }

.Post__create-comment {
      border-top: 1px solid #efefef;
      color: #999;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-size: 14px;
      line-height: 18px;
      min-height: 56px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      padding: 16px 0;
      margin-top: 4px;
  }   
.Post__create-comment--field {
    background: 0 0;
    border: 0;
    color: #262626;
    font-size: inherit;
    height: 18px;
    max-height: 80px;
    outline: 0;
    padding: 0;
    resize: none;
} 
   
Post__create-comment--input, Post__create-comment--field {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
  }
.show, .show:visited {
    font-weight: 600;
    color: #262626;
}
.iconHeartOpen {
    background-position: -564px -244px; 
    width: 26px;
    height: 23px;
}

.iconComment, .iconHeartOpen, .iconSaveOpen, .iconHeart, .LoggedOutWordmark, .iconSave, .Nav-brand-logo{
    background-image: url(./assets/instagram-sprite.png);
}
.iconComment {
    background-position: -566px -113px; 
    height: 24px;
    width: 24px;
}
.iconSaveOpen {
    background-repeat: no-repeat;
    background-position: -566px -425px;
    height: 24px;
    width: 24px;
}
.iconSave {
    background-repeat: no-repeat;
    background-position: -131px -552px; 
    width: 24px;
    height: 24px;
}
.iconHeart {
    background-position: -564px -216px; 
    width: 29px;
    height: 25px;
}
</style>

